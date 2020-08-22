export const PIXELIZER_ACTIVATED = 'MODULES/PIXELIZER/PIXELIZER_ACTIVATED';
export const UPDATE_RENDER_TYPE = 'MODULES/PIXELIZER/UPDATE_RENDER_TYPE';
export const UPDATE_RENDER_PARAMS = 'MODULES/PIXELIZER/UPDATE_RENDER_PARAMS';
/**
 * Calls action when a valid photo was uploaded
 */
export const handlePixelizerActivated = photoDetails => ({
    type: PIXELIZER_ACTIVATED
});

export const updateRenderType = newType => ({
    type: UPDATE_RENDER_TYPE,
    payload: newType
});