import React from 'react';
import styled from "styled-components";

const SLIDER_ARROW_SIZE = 10;
const SLIDER_BORDER_SIZE = 1;
const SLIDER_HYPOTENUSE = Math.sqrt(Math.pow(SLIDER_ARROW_SIZE * 2, 2) * 2);

const Slider = (props) => {
    const {onMouseDown, forwardRef} = props;
    return (
        <SliderWrapper
            draggable
            onDragStart={e => e.preventDefault()}
            onMouseDown={onMouseDown}
            ref={forwardRef}
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
        width: `${SLIDER_ARROW_SIZE * 2}px`,
        position: `absolute`,
        top: 0,
        left: `${props.theme.sliderPosition-SLIDER_ARROW_SIZE}px`,
        cursor:` col-resize`,
        zIndex: 2
    },
  }))``;

const Arrow = styled.span `
    height: ${SLIDER_ARROW_SIZE * 2}px;
    width: 100%;
    border: ${SLIDER_BORDER_SIZE}px solid white;
    position: absolute;
    top: ${props => `${(props.theme.imageMeasures.height-SLIDER_HYPOTENUSE)/2 + SLIDER_HYPOTENUSE/2-SLIDER_ARROW_SIZE}px`}; /* offset between two elements*/
    left: 0;
    transform: rotate(45deg);
`;
const TopSeperator = styled.div `
    width: ${SLIDER_BORDER_SIZE}px;
    background-color: white;
    height: ${props => `${(props.theme.imageMeasures.height-SLIDER_HYPOTENUSE)/2}px`};
    left: ${SLIDER_ARROW_SIZE - SLIDER_BORDER_SIZE/2}px;
    position: absolute;
    top: 0;
`;
const BottomSeperator = styled(TopSeperator)`
    top: unset;
    bottom: 0;
`;