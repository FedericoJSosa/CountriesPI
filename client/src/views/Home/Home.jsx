import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCountries())
    },[])
    
    return (
        <div className={style.mainContainer}>
            <div className={style.NavBar}>
            <NavBar/>
            </div>
            <div className={style.Cards}>
                <Cards/>
            </div>
            <div className={style.Footer}>
            <Footer/>
            </div>
        </div>
    )
};


export default Home;