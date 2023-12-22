import { useState, useEffect } from "react";
import style from "./Form.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    });

    useEffect(() => {
        validate(formState);
    }, [formState]);

    const onChange = (event) => {
        const prop = event.target.name;
        const value = event.target.value;

        setFormState({ ...formState, [prop]: value });
    };

    const validate = (formState) => {
        setErrors({
            name: formState.name.trim() === "" ? "" : /^[a-zA-Z\s.'-]{1,25}$/u.test(formState.name) ? "" : "Hay un error en el nombre",
            difficulty: formState.difficulty.trim() === "" ? "" : /^[0-5]$/.test(formState.difficulty) ? "" : "Hay un error en la dificultad",
            duration: formState.duration.trim() === "" ? "" : /^(?:[0-9]|1\d|2[0-4])$/.test(formState.duration) ? "" : "Hay un error en la duración",
            season: formState.season.trim() === "" ? "" : /^(Verano|Invierno|Primavera|Otoño)$/i.test(formState.season) ? "" : "Hay un error en la temporada",
            countries: formState.countries.trim() === "" ? "" : formState.countries.length <= 50 ? "" : "Hay un error en el nombre de los países"
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) {
            return "Some fields are missing or a rule is violated."
        } else {
            try {
               await axios.post("http://localhost:3001/activities",  formState);
               
            } catch (error) {
                console.log("Error al enviar el formulario:", error);
            }
        }
    };


    return (
        <div>
            <form className={style.mainContainer} onSubmit={onSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={formState.name} onChange={onChange} name="name" />
                    {formState.name.trim() !== "" && errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Difficulty: </label>
                    <input type="text" value={formState.difficulty} onChange={onChange} name="difficulty" />
                    {formState.difficulty.trim() !== "" && errors.difficulty && <span>{errors.difficulty}</span>}
                </div>
                <div>
                    <label>Duration: </label>
                    <input type="text" value={formState.duration} onChange={onChange} name="duration" />
                    {formState.duration.trim() !== "" && errors.duration && <span>{errors.duration}</span>}
                </div>
                <div>
                    <label>Season: </label>
                    <input type="text" value={formState.season} onChange={onChange} name="season" />
                    {formState.season.trim() !== "" && errors.season && <span>{errors.season}</span>}
                </div>
                <div>
                    <label>Countries: </label>
                    <input type="text" value={formState.countries} onChange={onChange} name="countries" />
                    {formState.countries.trim() !== "" && errors.countries && <span>{errors.countries}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <Link to="/home"><button className={style.button}>Home</button></Link>
        </div>
    );
};

export default Form;
