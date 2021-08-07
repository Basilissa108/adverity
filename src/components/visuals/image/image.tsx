import React from "react";
import { cn } from "../../../utilities/shorthands";
import css from "./image.module.scss";

type ImageProps = {
    /** Name of the image file which should be located in */
    src: string;
    /** Description of the image */
    alt: string;
    /** Size of the image */
    size?: "small" | "medium" | "large";
};

export const Image = (props: ImageProps): JSX.Element => {
    const { src, alt, size = "medium" } = props;

    return <img src={src} alt={alt} className={cn(css.image, css[size])} />;
};
