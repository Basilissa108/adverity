import React from "react";
import { cn } from "../../../utilities/shorthands";
import css from "./typography.module.scss";

type TypographyProps = {
    /** Text to be displayed */
    children: string;
    /** ClassName to apply custom styles */
    className?: string;
};

export const H1 = (props: TypographyProps): JSX.Element => (
    <h1 className={cn(css.h1, props.className)}>{props.children}</h1>
);

export const P = (props: TypographyProps): JSX.Element => (
    <p className={cn(css.p, props.className)}>{props.children}</p>
);

export const Span = (props: TypographyProps): JSX.Element => (
    <span className={cn(css.span, props.className)}>{props.children}</span>
);
