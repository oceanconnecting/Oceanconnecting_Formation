import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">What We Offer</span>
                                            <h2 className="title tg-svg">
                                                Transform Your Future with Our <span className="position-relative"><span
                                                className="svg-icon" id="courses-svg"
                                                data-svg-icon="assets/img/icons/title_shape.svg"/>Comprehensive Courses</span>
                                            </h2>
                                        </div>
                                        <p className="fw-medium">
                                            Unlock your potential with expertly curated courses designed to equip you
                                            with the skills and knowledge needed to excel in today's competitive world.
                                        </p>
                                        <p>
                                            Whether you're looking to advance in your career, explore new interests, or
                                            gain specialized expertise, our courses are tailored to suit diverse
                                            learning needs. Led by industry experts, our programs combine theoretical
                                            insights with practical applications to ensure a comprehensive learning
                                            experience.
                                        </p>
                                        <div className="tg-button-wrap">
                                            <Link href="/courses" className="btn tg-svg">
                                                <span className="text">Discover Courses</span>
                                                <span className="svg-icon" id="courses-btn"
                                                      data-svg-icon="assets/img/icons/btn-arrow.svg"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/assets/img/others/about_img03.jpg" alt="img"/>
                                        </div>
                                        <div className="column">
                                            <img src="/assets/img/others/about_img04.jpg" alt="img"/>
                                            <img src="/assets/img/others/about_img05.jpg" alt="img"/>
                                        </div>
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img"
                                                 className="about-shape-01" data-aos="fade-down-left"/>
                                            <img src="/assets/img/objects/about_shape02.png" alt="img"
                                                 className="about-shape-02" data-aos="fade-up-right"/>
                                            <img src="/assets/img/objects/about_shape03.png" alt="img"
                                                 className="about-shape-03 rotateme"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="fact-area fact-bg" data-background="/assets/img/bg/fact_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-7 col-md-9">
                                    <div className="section__title text-center mb-50">
                                        <span className="sub-title">Worldwide Our Achievement</span>
                                        <h2 className="title tg-svg">Grow You <span className="position-relative"><span
                                            className="svg-icon" id="fact-title"
                                            data-svg-icon="assets/img/icons/title_shape.svg"/>Skills</span>To Advance
                                            Your Career path</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-webinar"/>
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={5200} /></h3>
                                            <p>Students Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-graduates" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={399} /></h3>
                                            <p>Top Class Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-countries" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={312} /></h3>
                                            <p>World Countries</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-trophy" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={590} /></h3>
                                            <p>Award We Received</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-area-two position-relative">
                        <div className="cta__bg" data-background="/assets/img/bg/cta_bg.jpg" />
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-10">
                                    <div className="cta__content">
                                        <p>ARE YOU READY FOR THIS OFFER</p>
                                        <h2 className="title">50% Offer For Very First 50</h2>
                                        <h5 className="sub-title">Student’s  Mentors</h5>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Become a Student</span> <span className="svg-icon" id="cta-btn-2" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cta__shapes">
                            <img src="/assets/img/objects/cta_shape001.svg" alt="img" className="position-absolute" data-aos="fade-down-right" data-aos-delay={300} />
                            <img src="/assets/img/objects/cta_shape002.png" alt="img" className="position-absolute" />
                            <img src="/assets/img/objects/cta_shape003.svg" alt="img" className="position-absolute" data-aos="fade-up-left" data-aos-delay={300} />
                        </div>
                    </section>
                    <section className="events-area position-relative section-pt-120 section-pb-90">

                    </section>
                </div>

            </Layout>
        </>
    )
}