import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import OriginalImage from "./OriginalImage";
import Slider from "./Slider";
import {theme} from "../../common/theme";

const ViewerContent = (props) => {
    const {showLoader, showSlider, imageSource, forwardRef, canvasElement} = props;

    const [sliderPosition,
        setSliderPosition] = useState(0);

    const [isMouseDown,
        setIsMouseDown] = useState(false);

    const [transitionTimer,
        setTransitionTimer] = useState(null);
    const transitionTime = 100;

    useEffect(() => {
        setSliderPosition(0);
    }, [imageSource]);

    useEffect(() => {
        theme.sliderPosition = sliderPosition;
    }, [sliderPosition]);

    useEffect(() => {
        return () => {
            // Clean up timeout
            window.clearTimeout(transitionTimer);
        }
    }, [transitionTimer]);

    const updateSliderPosition = (e, transition) => {
        const currentX = e.pageX - canvasElement.getBoundingClientRect().left;
        const moveTo = inBetween(currentX, 0, theme.imageMeasures.width);
        setSliderPosition(moveTo);
        transition && setSliderTransition(transition);
    }

    const inBetween = (actual, min, max) => {
        if (actual < min) {
            return min;
        }
        if (actual > max) {
            return max;
        }
        return actual;
    };

    const setSliderTransition = (transition) => {
        theme.transition = `width ${transitionTime}ms`;
        setTransitionTimer(window.setTimeout(() => {
            theme.transition = null;
            setTransitionTimer(null); //TODO: take care of clearing transitionTimer on unmount
        }, transitionTime));
    }

    const startDrag = (e) => {
        if (!isMouseDown) {
            setIsMouseDown(true);
        }
    };

    const stopDrag = (e) => {
        e.preventDefault();
        if (isMouseDown) {
            setIsMouseDown(false)
        };
    };

    const onDrag = (e, transition) => {
        if (isMouseDown) {
            updateSliderPosition(e, transition);
        }
    };

    const shouldResumeDrag = (e) => {
        if (e.buttons !== 1) {
            stopDrag(e);
        }
    };
    return (
        <ViewerWrapper
            showContent={!showLoader}
            onMouseUp={stopDrag}
            onMouseEnter={shouldResumeDrag}
            onMouseMove={(e) => onDrag(e, true)}>
            <ViewerSizeWrapper>
                {showSlider && <Slider onMouseDown={startDrag}/>}
                <OriginalImage src={imageSource}/>
                <canvas ref={forwardRef} id={'pixelized-output'}/>
            </ViewerSizeWrapper>
        </ViewerWrapper>
    )
}

export default ViewerContent;

const ViewerWrapper = styled.div `
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: ${props => props.showContent ? 'visible' : 'hidden'};
	canvas {
		position: absolute;
		top: 0;
	}
`;

const ViewerSizeWrapper = styled.div `
    width: ${({theme}) => theme.imageMeasures.width ? `${theme.imageMeasures.width}px` : `100%`};
    height: ${({theme}) => theme.imageMeasures.height ? `${theme.imageMeasures.height}px` : `100%`};
	position: relative;
`;