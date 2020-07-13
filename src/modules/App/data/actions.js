export const SHOW_TOASTER = 'MODULES/PHOTO_VIEWER/SHOW_TOASTER';
export const DISMISS_TOASTER = 'MODULES/PHOTO_VIEWER/TOASTER_DISMISSED';

/**
 * Calls action when a valid photo was uploaded
 */
export const setShowToaster = (toasterMessage) => ({
    type: SHOW_TOASTER,
    payload: toasterMessage
});

export const dismissToaster = () => ({
    type: DISMISS_TOASTER
});