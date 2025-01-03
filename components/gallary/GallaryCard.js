import Link from "next/link";

const GallaryCard = ({ item }) => {
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
                        <i className="flaticon-file" /> {item.numberimage}
                    </li>

                </ul>

                {/* Bottom Section */}
            </div>
        </div>
    );
};

export default GallaryCard;
