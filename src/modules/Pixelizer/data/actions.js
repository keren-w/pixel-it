export const PIXELIZER_ACTIVATED = 'MODULES/PIXELIZER/PIXELIZER_ACTIVATED';

/**
 * Calls action when a valid photo was uploaded
 */
export const handlePixelizerActivated = photoDetails => ({
    type: PIXELIZER_ACTIVATED
});
