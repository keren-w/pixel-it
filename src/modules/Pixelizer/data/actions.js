export const PIXELIZER_ACTIVATED = 'MODULES/PIXELIZER/PIXELIZER_ACTIVATED';
export const UPDATE_RENDER_CONFIGS = 'MODULES/PIXELIZER/UPDATE_RENDER_CONFIGS';
/**
 * Calls action when a valid photo was uploaded
 */
export const handlePixelizerActivated = photoDetails => ({
    type: PIXELIZER_ACTIVATED
});

export const updateRenderConfigs = newConfig => ({
    type: UPDATE_RENDER_CONFIGS,
    payload: newConfig
});