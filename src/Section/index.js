import React from "react";
import "./style.css"

const Section = ({content, header}) => (
    <div className="section">
        <div className={`form__header ${(header) ? "" : "hidden"}`}>{header}</div>
        {content}
    </div>
);

export default Section;