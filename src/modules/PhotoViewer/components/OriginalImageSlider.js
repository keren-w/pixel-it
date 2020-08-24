import React, {Fragment, useState, useEffect} from 'react';
import styled from "styled-components";

const SLIDER_ARROW_SIZE = 15;
const SLIDER_BORDER_SIZE = 2;
const SLIDER_HYPOTENUSE = Math.sqrt(Math.pow(SLIDER_ARROW_SIZE * 2, 2) * 2);

const OriginalImageSlider = (props) => {
    const {src} = props;
    const [sliderPosition,
        setSliderPosition] = useState(50);

        useEffect(() => {
            setSliderPosition(0);
        }, [src])

    const handleSliderDrag = e => {
        const {parentElement} = e.target.parentElement;
        console.dir(parentElement)
        // const newSilderPosition = width / (e.clientX - width);
        console.log(e.movementX)
        // setSliderPosition(newSilderPosition); console.log(e.clientX);
        // console.log(e.target.parentElement);
    };

    return (
        <Fragment>
            <SliderWrapper sliderPosition={sliderPosition}>
                <OriginalImage src={src} sliderPosition={sliderPosition}/>
            </SliderWrapper>
            <Slider onDrag={handleSliderDrag} sliderPosition={sliderPosition}>
                <TopSeperator/>
                <Arrow/>
                <BottomSeperator/>
            </Slider>
        </Fragment>
    )
}

export default OriginalImageSlider;

const SliderWrapper = styled.div `
    height: 100%;
	position: relative;
    top: 0;
    left: ${props => `${100-props.sliderPosition}%`};
    overflow: hidden;
`;
const OriginalImage = styled.img `
    height: 100%;
    position: absolute;
    left: -${props => `${100-props.sliderPosition}%`};
`;
const Slider = styled.span `
    height: ${props => props.theme.imageMeasures.height}px;
    width: ${SLIDER_ARROW_SIZE*2}px;
    position: absolute;
    top: 0;
    left: ${props => `calc(${props.sliderPosition}% - ${SLIDER_ARROW_SIZE+2}px)`};
    cursor: col-resize;
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