import React from "react";
import "./style.css"

const Form = () => (
    <form className="js-form">
        <div className="form__header">Dodaj nowe zadanie</div>
        <div className="input__div">
            <input className="js-input" type="text" />
            <button className="js-button add-task">Utwórz</button>
        </div>
    </form>
);

export default Form;