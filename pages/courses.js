import Allcourses from "@/components/courses/Allcourses"
import FilterCourses from "@/components/courses/FilterCourses"
import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Courses() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our Courses">
                <section className="all-courses-area section-py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="tab-content" id="myTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <Allcourses />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}