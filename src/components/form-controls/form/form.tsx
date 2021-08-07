import React from "react";
import css from "./form.module.scss";

type FormProps = {
    /** Form controls (components: Input, Textarea) */
    children: JSX.Element;
};

export const Form = (props: FormProps): JSX.Element => (
    <form className={css.form}>{props.children}</form>
);
