import { parseJson } from "../../../utils/parseJSON";

export const AdvancedHeader = () => {
    const AdvancedHeaderJSON = {
        "type": "header",
        "props": {
            "className": "header-right",
            "style": {
                "flex": 1,
                "display": "flex",
                "flexDirection": "row",
                "justifyContent": "flex-end",
                "alignItems": "center",
                "padding": "0 8px",
                "gap": "8px"
            },
            "children": [
                {
                    "type": "md-button",
                    "props": {
                        "circle": true,
                        "size": "24",
                        "color": "white",
                        "disabled": true,
                        "children": {
                            "type": "md-icon",
                            "props": {
                                "slot": "icon",
                                "iconSet": "preferMomentumDesign",
                                "name": "webex_16"
                            }
                        }
                    }
                },
                {
                    "type": "md-button",
                    "props": {
                        "circle": true,
                        "size": "24",
                        "color": "white",
                        "disabled": true,
                        "children": {
                            "type": "md-icon",
                            "props": {
                                "slot": "icon",
                                "iconSet": "preferMomentumDesign",
                                "name": "audio-call_16"
                            }
                        }
                    }
                },
                {
                    "type": "md-button",
                    "props": {
                        "circle": true,
                        "size": "24",
                        "color": "white",
                        "disabled": true,
                        "children": {
                            "type": "md-icon",
                            "props": {
                                "slot": "icon",
                                "name": "alert_16"
                            }
                        }
                    }
                },
                {
                    "type": "md-button",
                    "props": {
                        "variant": "available",
                        "size": "24",
                        "disabled": true,
                        "class": "status-state-button",
                        "children": {
                            "type": "div",
                            "props": {
                                "class": "status-button__children",
                                "style": {
                                    "alignItems": "center",
                                    "gap": "32px"
                                },
                                "children": [
                                    {
                                        "type": "div",
                                        "props": {
                                            "className": "status-button",
                                            "style": {
                                                "display": "flex",
                                                "alignItems": "center",
                                                "gap": "4px"
                                            },
                                            "children": [
                                                {
                                                    "type": "span",
                                                    "props": {
                                                        "class": "status-indicator-container",
                                                        "children": {
                                                            "type": "md-icon",
                                                            "props": {
                                                                "slot": "icon",
                                                                "name": "unread-filled",
                                                                "size": "10",
                                                                "iconSet": "momentumDesign",
                                                                "color": "var(--avatar-presence-active)"
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    "type": "span",
                                                    "props": {
                                                        "class": "status-label available",
                                                        "style": {
                                                            "fontSize": "10px"
                                                        },
                                                        "children": " Available "
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "div",
                                        "props": {
                                            "className": "status-button",
                                            "style": {
                                                "display": "flex",
                                                "alignItems": "center",
                                                "gap": "4px"
                                            },
                                            "children": [
                                                {
                                                    "type": "span",
                                                    "props": {
                                                        "class": "status-time",
                                                        "style": {
                                                            "fontSize": "10px"
                                                        },
                                                        "children": "10:11"
                                                    }
                                                },
                                                {
                                                    "type": "md-icon",
                                                    "props": {
                                                        "class": "status-arrow",
                                                        "size": "10",
                                                        "name": "arrow-down-bold",
                                                        "iconSet": "momentumDesign"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "type": "md-avatar",
                    "props": {
                        "alt": "avatar",
                        "title": "W C",
                        "size": "24"
                    }
                }
            ]
        }
    };
    return parseJson(AdvancedHeaderJSON);
};
