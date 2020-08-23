import React, {useRef, useEffect} from 'react';
import styled from "styled-components";

const OriginalImageSlider = (props) => {
    const {file, imageMeasures} = props;
    const imageRef = useRef(null);

    useEffect(() => {
            var reader = new FileReader();
            const imageElement = imageRef.current;
            const {height, width}= imageMeasures;
            console.log("OriginalImageSlider -> height, width", height, width)
            reader.readAsDataURL(file);
            reader.onload = e => {
                imageElement.src = e.target.result;
                imageElement.style.height = `${height}px`;
                imageElement.style.width = `${width}px`;
            };
    }, [imageRef]);

    return (<OriginalImage ref={imageRef}/>)
}

export default OriginalImageSlider;

const OriginalImage = styled.img `
	height: 100%;	
	position: absolute;
	top: 0;
	clip-path: inset(0% 0% 0% 0%);
`;