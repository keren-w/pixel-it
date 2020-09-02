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

const ImageWrapper = styled.span.attrs(props => ({
    style: {
        height: `${props.theme.imageMeasures.height}px`,
        width: `${props.theme.sliderPosition}px`,
        position: `absolute`,
        top: 0,
        left: 0,
        overflow: `hidden`,
        zIndex: 1
    },
  }))``;
  
const Image = styled.img `
    height: 100%;
`;