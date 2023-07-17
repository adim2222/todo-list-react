import React from "react";
import "./style.css";

const Form = () => (
    <div className="input__div">
        <input className="js-input" type="text" />
        <button className="js-button add-task">Utwórz</button>
    </div>
);

export default Form;