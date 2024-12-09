import React, { useState } from 'react';
import "./titleEditor.css";
import DOMPurify from 'dompurify';
import { accessToken } from '../../../constants/constants';

const GenLogo = (
    selectedIcon,
    setSelectedIcon,
    handleIconClick,
) => {
    const [prompt, setPrompt] = useState("");
    const [svgContent, setSvgContent] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchGenImg = async (prompt) => {
        try {
            const response = await fetch('http://localhost:3001/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    prompt: `${prompt}`,
                })
            });
            const data = await response.json();
            const svg = data.content;
            return svg;
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const handleSubmit = async () => {
        setLoading(true);
        const generatedSvg = await fetchGenImg(prompt);
        setSvgContent(generatedSvg);
        console.log("Logo generated", generatedSvg);
        setLoading(false);
    };

    const renderSVG = (svgContent) => {
        return (
        <div className={`icon-card ${selectedIcon ==="gen" ? 'selected' : ''}`} onClick={() => {
            setSelectedIcon("gen");
            handleIconClick("gen")}}>
            <div className="svg-container icon-container">
                <div dangerouslySetInnerHTML={{ __html:  DOMPurify.sanitize(svgContent) }} />
            </div>
        </div>
        );
    }

    const renderLoading = () => {
        return (
            <md-spinner>
            </md-spinner>
        )
    }

    return (
        <div className="content">
            <div className="title">
                <p>Generate logo</p>
            </div>
            <div className='icon-gen'>
                {loading && renderLoading()}
                {!loading && svgContent && renderSVG(svgContent)}
            </div>
            <div>
                <md-input type="text" value={prompt} label="Describe the logo" onInput={(e) => setPrompt(e.target.value)}></md-input>
                <md-button onClick={handleSubmit} color="blue">Generate</md-button>
            </div>
        </div>
    );
};

export default GenLogo;