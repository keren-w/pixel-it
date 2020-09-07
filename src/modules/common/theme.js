const SLIDER_ARROW_SIZE = 20;
const SLIDER_BORDER_SIZE = 1;
const SLIDER_HYPOTENUSE = Math.sqrt(Math.pow(SLIDER_ARROW_SIZE, 2) * 2);

export const theme = {
    imageMeasures: {
        height: 0,
        width: 0
    },
    slider: {
        arrowSize: SLIDER_ARROW_SIZE,
        borderSize: SLIDER_BORDER_SIZE,
        sliderHypotenuse: SLIDER_HYPOTENUSE,
        separatorLeft: SLIDER_ARROW_SIZE/2 - SLIDER_BORDER_SIZE/2
    },
    transition: null,
    backgroundGradientLight: '#603675',
    backgroundGradientDark: '#0C070F',
    logoColor: '#A14ACB',
    buttonColor: '#5f1782',
    borderColor: '#280a37'
};