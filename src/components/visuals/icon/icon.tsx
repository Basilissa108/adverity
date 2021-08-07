import React from "react";
import * as css from "./icon.module.scss";

type IconProps = {
    /** Icon path to be displayed (Info, Warning, Close, Link, Code are available namespaced to the Icon component) */
    children: React.SVGProps<SVGGElement>;
};

const IconInternal = (props: IconProps): JSX.Element => {
    const { children } = props;

    return (
        <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className={css.icon}
        >
            {children}
        </svg>
    );
};

const Info = () => (
    <g>
        <path
            fill="#3498db"
            d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-6h2v6zm0-8h-2v-2h2v2z"
        />
    </g>
);
const Warning = () => (
    <g>
        <path
            fill="#e74c3c"
            style={{ transform: "rotate(180deg)", transformOrigin: "50% 50%" }}
            d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-6h2v6zm0-8h-2v-2h2v2z"
        />
    </g>
);
const Close = () => (
    <g>
        <path
            fill="#222f3e"
            d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"
        />
    </g>
);
const Link = () => (
    <g>
        <path
            fill="#3498db"
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4v-1.9h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2h-8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4v1.9h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
        />
    </g>
);
const Code = () => (
    <g>
        <path
            fill="#3498db"
            d="M7 5h10v2h2v-4c0-1.1-.9-1.99-2-1.99l-10-.01c-1.1 0-2 .9-2 2v4h2v-2zm8.41 11.59l4.59-4.59-4.59-4.59-1.41 1.42 3.17 3.17-3.17 3.17 1.41 1.42zm-5.41-1.42l-3.17-3.17 3.17-3.17-1.41-1.42-4.59 4.59 4.59 4.59 1.41-1.42zm7 3.83h-10v-2h-2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"
        ></path>
    </g>
);

export const Icon = Object.assign(IconInternal, {
    Close,
    Info,
    Warning,
    Link,
    Code,
});
