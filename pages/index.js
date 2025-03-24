import Layout from "@/components/layout/Layout"
import Cta2 from "@/components/sections/Cta2"
import Cta4 from "@/components/sections/Cta4"
import Fact2 from "@/components/sections/Fact2"
import QuickAction1 from "@/components/sections/QuickAction1"
import Slider1 from "@/components/sections/Slider1"
import Testimonial3 from "@/components/sections/Testimonial3"

export default function Home3() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Slider1 />
                <QuickAction1 />
                <Fact2 />

                <Cta2 />

                <div className="area-bg" data-background="/assets/img/bg/area_bg.jpg">
                    <Testimonial3 />
                </div>

                <Cta4 />
            </Layout>
        </>
    )
}