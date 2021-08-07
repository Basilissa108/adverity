import React from "react";
import { FormLabel } from "../form-label/form-label";
import css from "./input.module.scss";

type InputProps = {
    /** Label to describe the input field */
    label: string;
    /** Value of the input field */
    value: string;
    /** Callback for onChange event */
    onChange: (v: string) => void;
    /** Placeholder */
    placeholder?: string;
};

export const Input = (props: InputProps): JSX.Element => {
    const { label, value, onChange, placeholder } = props;

    return (
        <div className={css.inputContainer}>
            <FormLabel>{label}</FormLabel>
            <input
                type="text"
                aria-label={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={css.input}
            />
        </div>
    );
};
