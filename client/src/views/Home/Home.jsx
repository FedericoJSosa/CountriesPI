import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.mainContainer}>
            <NavBar />
            <div className={style.mainContainer}>
                <h1>Soy Home</h1>
            </div>
            <Footer/>
        </div>
    )
};


export default Home;