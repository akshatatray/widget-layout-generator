
/**
 * Parses a JSON object to JSX components.
 * @param {Object} node - JSON object representing the JSX structure.
 * @returns {React.ReactNode} Parsed JSX component.
 */
import React
    from "react";
export const parseJson = (node) => {
    if (!node || typeof node !== "object") return node;

    const { type, props } = node;

    if (!type) return node;

    const { children, style, ...restProps } = props || {};

    const parsedChildren = Array.isArray(children)
        ? children.map(parseJson)
        : parseJson(children);

    return React.createElement(
        type,
        { ...restProps, style },
        parsedChildren
    );
};