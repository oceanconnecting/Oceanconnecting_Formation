import Link from "next/link"
import MobileMenu from "../MobileMenu"
import { Menu } from '@headlessui/react'
export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <div id="header-fixed-height" />
            <header className="tg-header__style-three">
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="tg-header__top-info list-wrap">
                                    <li><i className="flaticon-pin" /> <span>Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR</span></li>
                                    <li><i className="flaticon-email" /> <Link href="mailto:info@gmail.com">oceanconnecting.ma@gmail.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="tg-header__top-social list-wrap">
                                    <li>Follow Us On :</li>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-whatsapp" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div style={{width:'100px'}}>
                                            <Link href="/"><img src="/assets/img/logo/ocean.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmenu__categories d-none d-md-block">

                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
                                                <li className="active menu-item"><Link href="/">Home</Link>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="#">Courses</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/courses">All Courses</Link></li>
                                                        <li><Link href="/course-details">Course Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="#">Pages</Link>
                                                    <ul className="sub-menu">
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
                                                </li>
                                                <li className="menu-item-has-children"><Link href="#">Blog</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/blog-grid">Blog Grid</Link></li>
                                                        <li><Link href="/blog">Blog Standard</Link></li>
                                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tgmenu__search-bar">
                                            <form action="#">
                                                <input type="text" placeholder="Search For Course . . ." />
                                                <button type="submit"><i className="flaticon-searching" /></button>
                                            </form>
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="mini-cart-icon">
                                                    <Link href="/shop" className="cart-count">
                                                        <img src="/assets/img/icons/cart.svg" alt="cart" />
                                                        <span className="mini-cart-count">0</span>
                                                    </Link>
                                                </li>
                                                <li className="header-btn"><Link href="/contact" className="btn">Sign Up</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="#" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div>
                                        <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
