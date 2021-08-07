import React from "react";
import { Icon } from "../../visuals/icon/icon";
import { P } from "../typography/typography";
import css from "./toast.module.scss";

type ToastProps = {
    /** Text to be displayed */
    children: string;
    /** Type of the Toast */
    variant: "info" | "warning";
};

export const Toast = (props: ToastProps): JSX.Element => {
    const { children, variant } = props;

    return (
        <div className={css.toast}>
            <div className={css.iconContainer}>
                <Icon>
                    {variant === "info" ? <Icon.Info /> : <Icon.Warning />}
                </Icon>
            </div>
            <P>{children}</P>
        </div>
    );
};
