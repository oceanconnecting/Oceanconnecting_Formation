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
                <li className="menu-item">
                    <Link href="/courses">Courses</Link>
                </li>
                <li className="menu-item">
                    <Link href="/gallary">Gallary</Link>
                </li>
                <li className="menu-item">
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className="menu-item">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}