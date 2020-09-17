import React from 'react';
import styled from "styled-components";

const Slider = (props) => {
    const {onMouseDown} = props;
    return (
        <SliderWrapper
            draggable
            onDragStart={e => e.preventDefault()}
            onMouseDown={onMouseDown}
           >
            <TopSeperator/>
            <Arrow/>
            <BottomSeperator/>
        </SliderWrapper>
    )
}

export default Slider;

const SliderWrapper = styled.span.attrs(props => ({
    style: {
        height: `${props.theme.imageMeasures.height}px`,
        width: `${props.theme.slider.arrowSize}px`,
        position: `absolute`,
        top: 0,
        left: `${props.theme.sliderPosition-props.theme.slider.arrowSize/2}px`,
        cursor:` col-resize`,
        zIndex: 2
    },
  }))``;

const Arrow = styled.span `
    height: ${({theme}) => theme.slider.arrowSize}px;
    width: 100%;
    border: ${({theme}) => theme.slider.borderSize}px solid white;
    position: absolute;
    top: ${({theme}) => theme.imageMeasures.height/2-theme.slider.arrowSize/2}px; /* offset between two elements*/
    left: 0;
    transform: rotate(45deg);
`;
const TopSeperator = styled.div `
    width: ${({theme}) => theme.slider.borderSize}px;
    background-color: white;
    height: ${({theme}) => theme.imageMeasures.height/2-theme.slider.sliderHypotenuse/2}px;
    left: ${({theme}) => theme.slider.separatorLeft}px;
    position: absolute;
    top: 0;
`;
const BottomSeperator = styled(TopSeperator)`
    top: unset;
    bottom: 0;
`;