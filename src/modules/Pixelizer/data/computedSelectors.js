import * as selectors from "./selectors";
import {RENDER_TYPE} from "./constants";

export const getShowSlider = state => {
    const {renderType} = selectors.getRenderConfig(state);
    return renderType !== RENDER_TYPE.DEFAULT;
};