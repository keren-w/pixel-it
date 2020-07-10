export const HANDLE_PHOTO_UPLOADED = 'modules/nameInput/NAME_ENTERED';

/**
 * Calls action when a valid photo was uploaded
 */
export const handlePhotoUploaded = photoDetails => ({
    type: HANDLE_PHOTO_UPLOADED,
    payload: photoDetails,
});

