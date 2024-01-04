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
    const [submitMessage, setSubmitMessage] = useState("");

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
            name: formState.name.trim() === "" ? "" : /^[a-zA-Z\s.'-]{1,25}$/u.test(formState.name) ?
             "" : "It cannot contain numbers. Text only.",
            difficulty: formState.difficulty.trim() === "" ? "" : /^[0-5]$/.test(formState.difficulty) ?
             "" : "It must be a number between 0 and 5.",
            duration: formState.duration.trim() === "" ? "" : /^(?:[0-9]|1\d|2[0-4])$/.test(formState.duration) ?
             "" : "It must be a number between 0 and 24.",
            season: formState.season.trim() === "" ? "" : /^(Verano|Invierno|Primavera|Otoño)$/i.test(formState.season) ?
             "" : "Only seasons.",
            countries: formState.countries.trim() === "" ? "" : formState.countries.length <= 50 ?
             "" : "It cannot be longer than 50"
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) {
            return "Some fields are missing or a rule is violated."
        } else {
            try {
               await axios.post("http://localhost:3001/activities",  formState);
               setSubmitMessage("The activity has been created");
            } catch (error) {
                setSubmitMessage("An error occurred while loading data. If there are no missing fields, please try again later.");
            }
        }
    };


    return (
        <div className={style.container}>
            <form className={style.Form} onSubmit={onSubmit}>
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
                <button type="submit" className={style.button}>Submit</button>
            </form>

            {submitMessage && <p>{submitMessage}</p>}
            <Link to="/home"><button className={style.button}>Home</button></Link>
        </div>
    );
};

export default Form;
