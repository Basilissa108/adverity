import React from "react";
import * as css from "./test.module.scss";

type TestProps = {
    /** what? */
    what: string;
};

export const Test = (props: TestProps): JSX.Element => {
    return <h1 className={css.test}>{props.what}</h1>;
};
