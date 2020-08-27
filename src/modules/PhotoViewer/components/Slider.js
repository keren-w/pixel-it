import React, {Fragment, useState, useEffect} from 'react';
import styled from "styled-components";

const SLIDER_ARROW_SIZE = 15;
const SLIDER_BORDER_SIZE = 2;
const SLIDER_HYPOTENUSE = Math.sqrt(Math.pow(SLIDER_ARROW_SIZE * 2, 2) * 2);

const Slider = (props) => {
    const {setSliderPosition} = props;

    const handleSliderDrag = e => {
        // console.log("OriginalImageSlider -> e", e.nativeEvent)
        e
            .nativeEvent
            .preventDefault();
        // const {parentElement} = e.target.parentElement;
        // console.log(parentElement.offsetLeft) const newSilderPosition = width /
        // (e.clientX - width);
        // console.dir(e.nativeEvent.target.offsetParent.offsetParent);
        // console.log(e.nativeEvent.target.offsetParent.offsetParent.offsetLeft);
        const offsetX = e.nativeEvent.target.offsetParent.offsetLeft;
        const movementX = e.nativeEvent.offsetX - SLIDER_HYPOTENUSE / 2;
        // console.log("offsetX", e.nativeEvent.screenX)
        if (e.nativeEvent.screenX) {
            // console.log("offsetX", offsetX) console.log("OriginalImageSlider ->
            // e.nativeEvent.screenX", movementX+offsetX)
            setSliderPosition(movementX + offsetX);
        }
        // if (movementX <= theme.imageMeasures.width && movementX >=
        // -1*theme.imageMeasures.width) {     setSliderPosition(movementX); }
        // setSliderPosition(newSilderPosition); console.log(e.clientX);
        // console.log(e.target.parentElement);
    };

    return (
        <SliderWrapper draggable>
                <TopSeperator/>
                <Arrow/>
                <BottomSeperator/>
        </SliderWrapper>
    )
}

export default Slider;

const SliderWrapper = styled.span `
    height: ${props => props.theme.imageMeasures.height}px;
    width: ${SLIDER_ARROW_SIZE*2}px;
    position: absolute;
    top: 0;
    left: ${props => `calc(100% - ${props.theme.imageMeasures.width+SLIDER_HYPOTENUSE/2-SLIDER_BORDER_SIZE*2-props.theme.sliderPosition}px)`};
    cursor: col-resize;
    z-index: 2;
`;
const Arrow = styled.span `
    height: ${SLIDER_ARROW_SIZE*2}px;
    width: 100%;
    border: ${SLIDER_BORDER_SIZE}px solid white;
    position: absolute;
    top: ${props => `${(props.theme.imageMeasures.height/2-SLIDER_HYPOTENUSE/2)+3}px`}; /* offset between two elements*/
    left: 0;
    transform: rotate(45deg);
`;
const TopSeperator = styled.div `
    width: ${SLIDER_BORDER_SIZE}px;
    background-color: white;
    height: ${props => `${(props.theme.imageMeasures.height/2-SLIDER_HYPOTENUSE/2)-1}px`};
    left: ${SLIDER_ARROW_SIZE+1}px;
    position: absolute;
    top: 0;
`;
const BottomSeperator = styled(TopSeperator)`
    top: unset;
    bottom: 0;
`;