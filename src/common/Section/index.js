import React from "react";
import { SectionDiv, FormHeader } from "./styled";

const Section = ({content, header}) => (
    <SectionDiv>
        <FormHeader hidden={(!header)}>{header}</FormHeader>
        {content}
    </SectionDiv>
);

export default Section;