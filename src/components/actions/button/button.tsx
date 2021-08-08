import React, { MouseEventHandler, ReactElement } from "react";
import { IconProps } from "../../visuals/icon/icon";
import { cn } from "../../../utilities/shorthands";
import css from "./button.module.scss";
import { Span } from "../../text/typography/typography";

export type ButtonProps = {
    /** Button label */
    children:
        | string
        | ReactElement<IconProps>
        | (string | ReactElement<IconProps>)[];
    /** Callback for onClick event */
    onClick: MouseEventHandler<HTMLButtonElement>;
    /** Determines the style of the component (defaults to "secondary") */
    variant?: "primary" | "secondary" | "destructive" | "link" | "borderless";
};

type IconOnlyButtonProps = Omit<ButtonProps, "variant"> & {
    /** Description of the functionality of the button */
    "aria-label": string;
};

const isIconOnly = (
    props: ButtonProps | IconOnlyButtonProps
): props is IconOnlyButtonProps => {
    return "aria-label" in props;
};

export const Button = (
    props: ButtonProps | IconOnlyButtonProps
): JSX.Element => {
    const { children, onClick } = props;
    let variant = "variant" in props ? props.variant : "secondary";
    let ariaLabel;

    if (isIconOnly(props)) {
        variant = "borderless";
        ariaLabel = props["aria-label"];
    }

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            className={cn(css.button, variant && css[variant])}
        >
            {React.Children.toArray(children).map((c) =>
                typeof c === "string" ? (
                    <Span className={css.label} key={c}>
                        {c}
                    </Span>
                ) : (
                    c
                )
            )}
        </button>
    );
};
