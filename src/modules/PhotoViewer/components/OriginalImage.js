import React from 'react';
import styled from "styled-components";

const OriginalImage = (props) => {
    const {src} = props;

    return (
        <ImageWrapper>
            <Image src={src}/>
        </ImageWrapper>
    )
}

export default OriginalImage;

const ImageWrapper = styled.div `
    height: ${props => props.theme.imageMeasures.height}px;
    width: 100%;
	position: absolute;
    top: 0;
    right: ${props => `${props.theme.imageMeasures.width-props.theme.sliderPosition}px`};
    overflow: hidden;
    z-index: 1;
`;
const Image = styled.img `
    height: 100%;
    position: absolute;
    right: ${props => `-${props.theme.imageMeasures.width-props.theme.sliderPosition}px`};
`;