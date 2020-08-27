import React from 'react';
import styled from "styled-components";

const OriginalImage = (props) => {
    const {src, sliderPosition} = props;

    return (
        <ImageWrapper sliderPosition={sliderPosition}>
            <Image src={src} sliderPosition={sliderPosition}/>
        </ImageWrapper>
    )
}

export default OriginalImage;

const ImageWrapper = styled.div `
    height: ${props => props.theme.imageMeasures.height}px;
	position: relative;
    top: 0;
    left: ${props => `${ 0 + props.sliderPosition}px`};
    overflow: hidden;
`;
const Image = styled.img `
    height: 100%;
    position: absolute;
    left: ${props => `-${ 0 + props.sliderPosition}px`};
`;