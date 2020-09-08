export const HANDLE_PHOTO_UPLOADED = 'MODULES/IMAGE_VIEW/PHOTO_UPLOADED';

/**
 * Calls action when a valid photo was uploaded
 */
export const handlePhotoUpload = photoDetails => ({
    type: HANDLE_PHOTO_UPLOADED,
    payload: photoDetails,
});