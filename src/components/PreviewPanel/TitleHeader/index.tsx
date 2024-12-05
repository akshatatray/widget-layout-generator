import React from "react";
import './TitleHeader.css';
import { parseJson } from "../../../utils/parseJSON";

const json = {
    "type": "header",
    "props": {
        "className": "header-left",
        "children": [
            {
                "type": "img",
                "props": {
                    "src": require("../../../assets/images/default-logo.png"),
                    "style": {
                        "height": "22px",
                        "width": "22px"
                    }
                }
            },
            {
                "type": "h3",
                "props": {
                    "className": "header-left-heading",
                    "children": "Webex Contact Center"
                }
            }
        ]
    }
};

export const Title = () => {
    return parseJson(json);
}

export default Title;