import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
        <button type="button" className="slick-prev">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    nextArrow: (
        <button type="button" className="slick-next">
            <i className="flaticon-chevron"></i>
        </button>
    ),
}

export default function TestimonalSlider2() {
    return (
        <>
            <Slider {...settings} className="testimonial-active">
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>"The Airport Check-in Agent Training program completely transformed my career prospects. The practical simulations and industry-specific language training gave me the confidence to handle any passenger situation professionally. Within weeks of completing the course, I landed a job at a major international airport!"</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Sarah Johnson</h4>
                        <span className="designation">Check-in Agent, Heathrow Airport</span>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>"As a non-native English speaker, I was struggling with UI design terminology and client communication. This course provided exactly what I needed - specialized vocabulary, common phrases for design discussions, and practice with realistic client scenarios. My confidence in client meetings has improved dramatically."</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Carlos Mendez</h4>
                        <span className="designation">UI/UX Designer</span>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>"The aviation English course was a game-changer for my career. The focus on radio communication, standard phraseology, and emergency procedures was exactly what I needed to advance from regional to international flights. The instructors had real-world experience which made all the difference."</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">David Chen</h4>
                        <span className="designation">Commercial Pilot</span>
                    </div>
                </div>
            </Slider>
        </>
    )
}