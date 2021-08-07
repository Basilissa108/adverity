import React from "react";
import { Span } from "../../text/typography/typography";
import css from "./form-label.module.scss";

type FormLabelProps = {
    /** Text to label the form element */
    children: string;
};

export const FormLabel = (props: FormLabelProps): JSX.Element => (
    <Span className={css.formLabel}>{props.children}</Span>
);
