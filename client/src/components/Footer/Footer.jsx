import { useDispatch, useSelector } from "react-redux";
import { pageChange } from "../../redux/actions";
import style from "./Footer.module.css";

const Footer = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.currentPage);
    const pageSize = useSelector((state) => state.pageSize);
    const totalCountries = useSelector((state) => state.currentCountries);

    const totalPages = Math.ceil(totalCountries / pageSize);

    const handlePageClick = (pageNumber) => {
        dispatch(pageChange(pageNumber));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageClick(i)} className={i === currentPage ? style.active : ""}>{i}</button>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <div>
                {renderPageNumbers()}
            </div>
        </div>
    );
};

export default Footer;
