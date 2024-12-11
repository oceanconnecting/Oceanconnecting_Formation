import Link from "next/link";

const CourseCard = ({ item }) => {
    return (
        <div className="courses__item-two shine__animate-item">
            {/* Course Thumbnail */}
            <div className="courses__item-two-thumb">
                    <img src={item.img[0]} alt={item.title} />

                <div className="author">
                    <Link href={`/course/${item.id}`}>

                    </Link>
                </div>
            </div>

            {/* Course Content */}
            <div className="courses__item-two-content">
                {/* Tag - Replace with category or other relevant data */}
                {/* Course Title */}
                <h5 className="title">
                    {item.title}
                </h5>
                {/* Course Description */}
                <p>{item.description}</p>

                {/* Course Details */}
                <ul className="courses__item-meta list-wrap">
                    <li>
                        <i className="flaticon-file" /> 5 Modules
                    </li>
                    <li>
                        <i className="flaticon-timer" /> 3 Months
                    </li>
                    <li>
                        <i className="flaticon-user-1" /> 30 Students
                    </li>
                </ul>

                {/* Bottom Section */}
                <div className="courses__item-bottom">
                    <div className="course__price">
                        <h3 className="price">Contact us</h3>
                    </div>
                    <div className="courses__item-rating">
                        <i className="fas fa-star" />
                        <span className="rating-count">(4.2)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
