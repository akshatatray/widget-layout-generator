import React from "react";
import { prebuiltWidgetTemplates } from "../../../constants/prebuiltWidgetTemplates";
import { useDispatch, useSelector } from "react-redux";
import { updateWidgetPanelLayout } from "../../../store/widgetPanelLayoutSlice";

const WidgetEditorTemplateGrid = ({ setIsPreBuiltGridSelected }) => {
    const dispatch = useDispatch();
    const selectedScreen = useSelector((state) => state.selectedScreen);

    const handleUpdateSelectedLayout = (layout) => {
        console.log("Selected Layout: ", layout);
        dispatch(updateWidgetPanelLayout({ screenName: selectedScreen, widgets: layout }));
        setIsPreBuiltGridSelected(false);
    };

    return (
        <div className="widgets-template-container">
            {
                prebuiltWidgetTemplates.map((template) => {
                    return (
                        <div key={template.key} className={`widgets-template widgets-template-${template.index}`} onClick={() => handleUpdateSelectedLayout(template.layout)}>
                            <div className="widgets-template-layout">
                                {
                                    template.layout.map((layout, index) => {
                                        const style = {
                                            gridColumnStart: layout.x + 1,
                                            gridColumnEnd: `span ${layout.w}`,
                                            gridRowStart: layout.y + 1,
                                            gridRowEnd: `span ${layout.h}`,
                                            width: `(${layout.w / 8})*100%`,
                                            height: `(${layout.h / 20})*100%`,
                                            borderRadius: '4px',
                                            background: 'linear-gradient(123.47deg, rgba(0, 0, 0, 0.2) 14.98%, rgba(0, 0, 0, 0.3) 34.55%, rgba(0, 0, 0, 0.4) 56.7%, rgba(0, 0, 0, 0.5) 85.87%)',
                                        };
                                        return (
                                            <div
                                                key={index}
                                                className="widgets-template-layout-item"
                                                style={style}
                                            ></div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default WidgetEditorTemplateGrid;
