import React from "react";

export const navigationref = React.createRef();
export const navigate = (name, params) => {
    navigationref.current && navigationref.current.navigate(name, params);
}