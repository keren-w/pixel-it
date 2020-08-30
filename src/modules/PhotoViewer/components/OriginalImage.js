import React from 'react';
import styled from "styled-components";

const OriginalImage = (props) => {
    const {src} = props;

    return (
        <ImageWrapper id={'photo-input'}>
            <Image src={src}/>
        </ImageWrapper>
    )
}

export default OriginalImage;

const ImageWrapper = styled.div `
    height: ${props => props.theme.imageMeasures.height}px;
    width: ${props => `${props.theme.sliderPosition}px`};
	position: absolute;
    top: 0;
    left: 0; 
    overflow: hidden;
    z-index: 1;
`;
const Image = styled.img `
    height: 100%;
`;