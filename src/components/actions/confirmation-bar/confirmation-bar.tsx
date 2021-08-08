import React, { MouseEventHandler, ReactElement } from "react";
import { Button, ButtonProps } from "../button/button";
import css from "./confirmation-bar.module.scss";

type ConfirmationBarProps = {
    /** Callback for primary action */
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    /** Callback for cancel button (if not provided the cancel button is hidden) */
    onCancel?: MouseEventHandler<HTMLButtonElement>;
    /** Custom label for primary action (defaults to "Submit") */
    submitButtonText?: string;
    /** Additional actions that will be displayed on the left side of the bar */
    additionalActions?: ReactElement<ButtonProps>[];
};

export const ConfirmationBar = (props: ConfirmationBarProps): JSX.Element => {
    const {
        onSubmit,
        submitButtonText = "Submit",
        onCancel,
        additionalActions,
    } = props;

    return (
        <div className={css.confirmationBar}>
            {additionalActions && (
                <div className={css.additionalActions}>{additionalActions}</div>
            )}
            <div className={css.actions}>
                {onCancel && <Button onClick={onCancel}>Cancel</Button>}
                <Button variant="primary" onClick={onSubmit}>
                    {submitButtonText}
                </Button>
            </div>
        </div>
    );
};
