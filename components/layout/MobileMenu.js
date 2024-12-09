import Link from "next/link"
import { useState } from "react"
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <ul className="navigation">
                <li className="active menu-item"><Link href="/">Home</Link>

                </li>
                <li className="menu-item-has-children"><Link href="courses">Courses</Link>
 </li>
                <li className="menu-item-has-children"><Link href="#">Pages</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/instructors">Our Instructors</Link></li>
                        <li><Link href="/instructor-details">Instructor Details</Link></li>
                        <li><Link href="/mentors">Our Mentors</Link></li>
                        <li><Link href="/events">Our Events</Link></li>
                        <li><Link href="/events-details">Event Details</Link></li>
                        <li><Link href="/faq">Asked Question</Link></li>
                        <li><Link href="/404">404 Page</Link></li>
                        <li><Link href="/contact">contact</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="plus-line" /></div></li>


            </ul>
        </>
    )
}
