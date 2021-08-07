import React from "react";
import { FormLabel } from "../form-label/form-label";
import css from "./textarea.module.scss";

type TextareaProps = {
    /** Label to describe the textarea */
    label: string;
    /** Value of the textarea */
    value: string;
    /** Callback for onChange event */
    onChange: (v: string) => void;
    /** Placeholder */
    placeholder?: string;
};

export const Textarea = (props: TextareaProps): JSX.Element => {
    const { label, value, onChange, placeholder } = props;

    return (
        <div className={css.textareaContainer}>
            <FormLabel>{label}</FormLabel>
            <textarea
                aria-label={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={css.textarea}
            />
        </div>
    );
};
