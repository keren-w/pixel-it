import React, {useState} from 'react';
import styled from "styled-components";

const SLIDER_ARROW_SIZE = 15;
const SLIDER_BORDER_SIZE = 2;
const SLIDER_HYPOTENUSE = Math.sqrt(Math.pow(SLIDER_ARROW_SIZE*2,2)*2);

const OriginalImageSlider = (props) => {
    const {height, width, src} = props;
    const [sliderPosition, setSliderPosition] = useState(0);
    
    const handleSliderDrag = e => {
        const {parentElement} = e.target;
        // console.dir(parentElement)
        const newSilderPosition = width/(e.clientX-width);
        console.log(newSilderPosition)
        // setSliderPosition(newSilderPosition);
        // console.log(e.clientX);
        // console.log(e.target.parentElement);
    };

    return <SliderWrapper height={height} width={width} sliderPosition={sliderPosition}>
        <OriginalImage src={src}/>
        <Slider onDrag={handleSliderDrag}><TopSeperator/><Arrow/><BottomSeperator/></Slider>
    </SliderWrapper>
}

export default OriginalImageSlider;

const SliderWrapper = styled.div `
    height: 100%;
	position: absolute;
    top: 0;
    left: ${props => `${100-props.sliderPosition}%`};
`;

const OriginalImage = styled.img `
    height: 100%;
`;
const Slider = styled.span `
    height: 100%;
    width: ${SLIDER_ARROW_SIZE*2}px;
    position: absolute;
    top: 0;
    left: ${-1*SLIDER_ARROW_SIZE-1}px;
`;
const Arrow = styled.span `
    height: ${SLIDER_ARROW_SIZE*2}px;
    width: 100%;
    border: 2px solid white;
    position: absolute;
    top: calc(50% - ${SLIDER_HYPOTENUSE/2 - SLIDER_BORDER_SIZE*2}px);
    left: 0;
    transform: rotate(45deg);   
`;
const TopSeperator = styled.div`
    width: ${SLIDER_BORDER_SIZE}px;
    background-color: white;
    height: calc(50% - ${SLIDER_HYPOTENUSE/2}px);
    left: ${SLIDER_ARROW_SIZE+1}px;
    position: absolute;
    top: 0;
`;
const BottomSeperator = styled(TopSeperator)`
    top: unset;
    bottom: 0;
`;