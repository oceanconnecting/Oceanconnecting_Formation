import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <ul className="navigation">
                <li className="active menu-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/courses">Courses</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Pages</Link>
                    {/* Dropdown menu */}
                    <ul
                        className="sub-menu"
                        style={{
                            display: isActive.key === "pages" ? "block" : "none",
                        }}
                    >
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    {/* Toggle button */}
                    <div
                        className={isActive.key === "pages" ? "dropdown-btn open" : "dropdown-btn"}
                        onClick={() => handleToggle("pages")}
                    >
                        <span className="plus-line" />
                    </div>
                </li>
            </ul>
        </>
    );
}
