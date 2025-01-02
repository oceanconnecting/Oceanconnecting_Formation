import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CourseCard from "@/components/courses/CourseCard";
const Gallary = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { courseList, courseSort } = useSelector((state) => state.courseFilter);
    const { category, instructor, price, language, difficulty } = courseList || {};
    const { sort, perPage } = courseSort;
    const dispatch = useDispatch();

    // Fetch courses from the API
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("https://hono-nextjs-l1in.vercel.app/api/formations"); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Placeholder filters (update based on your requirements)
    const categoryFilter = (item) => item; // Add logic for category filtering
    const languageFilter = (item) => item; // Add logic for language filtering

    // Sort filter
    const sortFilter = (a, b) =>
        sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

    // Render filtered and sorted content
    let content = courses
        ?.filter(categoryFilter)
        ?.filter(languageFilter)
        ?.sort(sortFilter)
        .slice(perPage.start, perPage.end !== 0 ? perPage.end : 12)
        ?.map((item) => (
            <div className="col" key={item.id}>
                <CourseCard item={item} />
            </div>
        ));

    const sortHandler = (e) => {
        dispatch(addSort(e.target.value));
    };

    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value);
        dispatch(addPerPage(pageData));
    };

    const clearAll = () => {
        dispatch(clearCategory());
        dispatch(clearLanguage());
        dispatch(clearPrice());
        dispatch(clearDifficulty());
        dispatch(clearInstructor());
        dispatch(clearCategoryToggle());
        dispatch(clearLanguageToggle());
        dispatch(clearPriceToggle());
        dispatch(clearDifficultyToggle());
        dispatch(clearInstructorToggle());
        dispatch(addSort(""));
        dispatch(addPerPage({ start: 0, end: 0 }));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="shop-top-wrap courses-top-wrap">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="shop-top-left">
                            <p> {content?.length} gallary for you</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                            <div>
                                {category?.length !== 0 ||
                                language?.length !== 0 ||
                                sort !== "" ||
                                perPage.start !== 0 ||
                                perPage.end !== 0 ? (
                                    <button
                                        onClick={clearAll}
                                        className="btn btn-reset text-nowrap me-2"
                                    >
                                        Reset
                                    </button>
                                ) : undefined}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                {content}
            </div>
        </>
    );
};

export default Gallary;
