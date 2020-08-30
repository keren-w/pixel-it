export const HANDLE_PHOTO_UPLOADED = 'MODULES/PHOTO_VIEWER/PHOTO_UPLOADED';

/**
 * Calls action when a valid photo was uploaded
 */
export const handlePhotoUpload = photoDetails => ({
    type: HANDLE_PHOTO_UPLOADED,
    payload: photoDetails,
});

