import React, { useEffect, useState } from "react";
import "./titleEditor.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateTitle, updateImage } from '../../../store/headerLeftLayoutSlice';
import { svgLibrary } from "../../../constants/constants";
import GenLogo from "./genLogo";
import { handleUploadImage, IconCard } from "./utils";


const TitleEditor = (props) => {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [iconList, setIconList] = useState([svgLibrary.logo, svgLibrary.sampleLogo]);

    const dispatch = useDispatch();
    const config = useSelector((state) => state.headerLeftLayout);
    console.log("HeaderLeft : ",config);
    

    useEffect(() => {
        console.log("Uploaded Image : ", uploadedImage);
        updateList();
    }, [uploadedImage]);
    
    const updateList = () => {
        if(isFileUploaded()) {
            handleIconClick(uploadedImage);
            setSelectedIcon(uploadedImage);
            setIconList([...iconList, uploadedImage]);
        }
    }
    const isFileUploaded = () => {
        return uploadedImage !== null && !iconList.includes(uploadedImage);
    }
    const handleIconClick = (icon) => {
        dispatch(updateImage({ source: icon }));
    };
    
    const handleTitleChange = (event) => {
        if(event.target.value.length > 0) 
            dispatch(updateTitle({ title: event.target.value }));
    };

    const renderIcons = (iconList, selectedIcon) => {
        return (
            <div className="icon-container">
                <IconCard icon={svgLibrary.stop} isSelected={svgLibrary.stop === selectedIcon} onClick={()=>{
                    setSelectedIcon(svgLibrary.stop);
                    handleIconClick(svgLibrary.noLogo);
                }} />
                {iconList.map((icon, index) => (
                    <IconCard key={index} icon={icon} isSelected={icon === selectedIcon} onClick={()=>{
                        setSelectedIcon(icon);
                        handleIconClick(icon);
                    }} />
                ))}
                <IconCard icon={svgLibrary.plus} isSelected={svgLibrary.plus === selectedIcon} onClick={()=>{
                    setSelectedIcon(svgLibrary.plus);
                    handleUploadImage(setUploadedImage);
                }} />
            </div>
        );
    };

    return (
        <>
            <h3 className="right-panel-heading">{props.title}</h3>
            <div className="content">
                <div className="input-filed">
                    <md-input type="text" value={config[1].title} label="Enter a title*" required onInput={handleTitleChange}>
                    </md-input>
                    <p>or upload a title image</p>
                </div>
                <p>Logo</p>
                {renderIcons(iconList, selectedIcon, handleIconClick)}
                {GenLogo(setUploadedImage)}
            </div>
        </>
    );
};

export default TitleEditor;