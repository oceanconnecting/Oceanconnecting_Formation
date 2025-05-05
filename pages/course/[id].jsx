import VideoPopup from "@/components/elements/VidepPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CourseSingle = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/course/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <section className="courses__breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="courses__breadcrumb-content">
                  <Link href="#" className="category">
                    {course.title}
                  </Link>
                  <h3 className="title">{course.title}</h3>
                  <p>{course.description}</p>
                  <ul className="courses__item-meta list-wrap">
                    <li>
                      <div className="author">
                        <Link href="#">
                          {course.instructors?.[0]?.img ? (
                            <img
                              src={course.instructors[0].img}
                              alt="Instructor"
                            />
                          ) : (
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "gray",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                              }}
                            >
                              <i
                                className="fas fa-user"
                                style={{
                                  color: "white",
                                  fontSize: "20px",
                                  margin: "auto",
                                }}
                              />
                            </div>
                          )}
                        </Link>
                        <Link href="#">
                          {course.instructors?.[0]?.name || "Instructor"}
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-file" /> {course.lessons || 0}{" "}
                      Lessons
                    </li>
                    <li>
                      <i className="flaticon-timer" />{" "}
                      {course.duration || "N/A"}
                    </li>
                    <li>
                      <i className="flaticon-user-1" /> {course.students || 0}{" "}
                      Students
                    </li>
                    <li>
                      <div className="rating">
                        {Array.from({
                          length: Math.round(course.rating || 0),
                        }).map((_, index) => (
                          <i key={index} className="fas fa-star" />
                        ))}
                        <span className="rating-count">
                          {course.rating || 0}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-details-area section-pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="courses__details-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                      <button
                        className={
                          activeIndex === 1 ? "nav-link active" : "nav-link"
                        }
                      >
                        Course Information
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                      <button
                        className={
                          activeIndex === 2 ? "nav-link active" : "nav-link"
                        }
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className={
                        activeIndex === 1 ? "tab-pane active" : "tab-pane"
                      }
                    >
                      <div className="courses__details-content">
                        <p>{course.details}</p>

                        <div className="courses__details-inner">
                          <h3 className="title">What Will You Learn?</h3>
                          <p>
                            By completing this course, you will gain valuable
                            skills and knowledge in {course.title}.
                          </p>
                          <div className="event-details-list">
                            <ul className="list-wrap">
                              {course.what_you_will_learn?.map(
                                (item, index) => (
                                  <li key={index}>
                                    <i className="fas fa-check-circle" />
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        <div className="courses__details-inner">
                          <h3 className="title">Requirements</h3>
                          <p>
                            To get the most out of this course, you should have:
                          </p>
                          <div className="event-details-list">
                            <ul className="list-wrap">
                              {course.requirements?.map((item, index) => (
                                <li key={index}>
                                  <i className="fas fa-check-circle" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="courses__details-curriculum">
                        <h4 className="title">Curriculum</h4>
                        <div className="accordion" id="accordionExample">
                          {course.curriculum?.map((lesson, index) => (
                            <div className="accordion-item" key={index}>
                              <h2
                                className="accordion-header"
                                onClick={() => handleToggle(index + 1)}
                              >
                                <button
                                  className={
                                    isActive.key == index + 1
                                      ? "accordion-button collapsed"
                                      : "accordion-button"
                                  }
                                >
                                  {lesson.title}
                                </button>
                              </h2>
                              <div
                                className={
                                  isActive.key == index + 1
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse"
                                }
                              >
                                <div className="accordion-body">
                                  <ul className="list-wrap">
                                    <li className="course-item">
                                      <Link
                                        href="#"
                                        className="course-item-link"
                                      >
                                        <span className="item-name">
                                          Introduction to {lesson.title}
                                        </span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            {lesson.duration}
                                          </span>
                                          <span className="item-meta course-item-status">
                                            <img
                                              src="/assets/img/icons/lock.svg"
                                              alt="icon"
                                            />
                                          </span>
                                        </div>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                     
                    </div>

                    <div
                      className={
                        activeIndex === 2 ? "tab-pane active" : "tab-pane"
                      }
                    >
                      <div className="courses__details-reviews">
                        <h4 className="title">Student Ratings Reviews</h4>
                        <div className="course-rate">
                          <div className="course-rate__summary">
                            <div className="course-rate__summary-value">
                              {course.rating || 0}
                            </div>
                            <div className="course-rate__summary-stars">
                              {Array.from({
                                length: Math.round(course.rating || 0),
                              }).map((_, i) => (
                                <i key={i} className="fas fa-star" />
                              ))}
                            </div>
                            <div className="course-rate__summary-text">
                              Total {course.students || 0} Students
                            </div>
                          </div>
                        </div>

                        <div id="course-reviews">
                          <h4 className="course-review-head">Reviews (01)</h4>
                          <ul className="list-wrap">
                            <li>
                              <div className="review-author">
                                <img
                                  src="/assets/img/blog/comment01.png"
                                  alt="img"
                                />
                              </div>
                              <div className="review-author-info">
                                <div className="review-stars-rated">
                                  {Array.from({
                                    length: Math.round(course.rating || 0),
                                  }).map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                  ))}
                                </div>
                                <h5 className="user-name">
                                  Student <span className="date">Recently</span>
                                </h5>
                                <p>
                                  This course provided excellent content on{" "}
                                  {course.title}. The instructor was
                                  knowledgeable and the materials were
                                  comprehensive.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="course-review-form">
                          <h4 className="course-review-head">Write a review</h4>
                          <form action="#">
                            <div className="row">
                              <div className="col-sm-6">
                                <input type="text" placeholder="Your Name" />
                              </div>
                              <div className="col-sm-6">
                                <input type="email" placeholder="Your Email" />
                              </div>
                            </div>
                            <input type="text" placeholder="Review Title" />
                            <div className="course-form-rating">
                              <span>Select Rating:</span>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <textarea placeholder="Type Comments" />
                            <button className="btn">Submit your Review</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4">
                <aside className="courses__details-sidebar">
                  <div className="event-widget">
                    <div className="thumb">
                      <img
                        src={
                          course.img?.[0] ||
                          "/assets/img/courses/course_thumb02.jpg"
                        }
                        alt="img"
                      />
                      <VideoPopup />
                    </div>
                    <div className="event-cost-wrap">
                     
                      <Link href="#" className="btn">
                        Enroll Now
                      </Link>
                      <div className="event-information-wrap">
                        <h6 className="title">Course Details</h6>
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-timer" />
                            Duration <span>{course.duration || "N/A"}</span>
                          </li>
                          <li>
                            <i className="flaticon-file" />
                            Lessons <span>{course.lessons || 0}</span>
                          </li>
                          <li>
                            <i className="flaticon-user-1" />
                            Students <span>{course.students || 0}</span>
                          </li>
                          <li>
                            <i className="flaticon-bars" />
                            Level <span>{course.level || "All Levels"}</span>
                          </li>
                          <li>
                            <i className="flaticon-flash" />
                            Certificate{" "}
                            <span>
                              {course.certificate_included
                                ? "Included"
                                : "Not Included"}
                            </span>
                          </li>
                          <li>
                            <i className="flaticon-share" />
                            Share
                            <ul className="list-wrap event-social">
                              <li>
                                <Link href="#">
                                  <i className="fab fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <i className="fab fa-twitter" />
                                </Link>
                              </li>
                              <Link href="https://www.instagram.com/oceanconnecting.ma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <i className="fab fa-instagram" />
                              </Link>
                              <li>
                                <Link href="#">
                                  <i className="fab fa-youtube" />
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                 
                </aside>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CourseSingle;
