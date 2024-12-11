import Link from "next/link"
import MobileMenu from "../MobileMenu"
import { Menu } from '@headlessui/react'
export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
    const pagesMenu = [
        { name: "About Us", href: "/about-us" },

        { name: "Contact", href: "/contact" },
    ];
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
                                    <li><i className="flaticon-email" /> <Link href="mailto:oceanconnecting.ma@gmail.com">oceanconnecting.ma@gmail.com</Link></li>
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
                                                <li className="menu-item"><Link href="/courses">Courses</Link>
                                                </li>
                                                {pagesMenu.map((page, index) => (
                                                    <li key={index} className="menu-item">
                                                        <Link href={page.href}>{page.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tgmenu__search-bar">
                                            <form action="#">
                                                <input type="text" placeholder="Search For Course . . ."/>
                                                <button type="submit"><i className="flaticon-searching"/></button>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <div className="tgmobile__menu-outer">
                                        <nav>
                                            <ul className="navigation">
                                                <li className="menu-item"><Link href="/">Home</Link></li>
                                                <li className="menu-item"><Link href="/courses">Courses</Link></li>
                                                {pagesMenu.map((page, index) => (
                                                    <li key={index} className="menu-item">
                                                        <Link href={page.href}>{page.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu}/>
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
