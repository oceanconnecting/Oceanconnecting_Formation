import { useDispatch, useSelector } from "react-redux"
import { addLanguage } from "../../features/bookFilterSlice"
import { languageCheck } from "../../features/bookSlice"

const BookLanguageFilter = () => {
    const { language } = useSelector((state) => state.book) || {}
    const dispatch = useDispatch()

    // instructor handler
    const languageHandler = (e, id) => {
        dispatch(addLanguage(e.target.value))
        dispatch(languageCheck(id))
    }

    return (
        <ul className="list-wrap">
            {language?.map((item) => (
                <li key={item.id}>
                    <div className="form-check">
                        <label className="form-check-label" >
                            <input className="form-check-input"
                                type="checkbox"
                                checked={item.isChecked}
                                value={item.value}
                                onChange={(e) => languageHandler(e, item.id)}
                            />
                            {item.name}
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default BookLanguageFilter
