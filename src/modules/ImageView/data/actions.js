export const HANDLE_PHOTO_UPLOADED = 'MODULES/IMAGE_VIEW/PHOTO_UPLOADED';
export const HANDLE_UPLOAD_REQUEST = 'MODULES/IMAGE_VIEW/HANDLE_UPLOAD_REQUEST';

/**
 * Calls action when a valid photo was uploaded
 */
export const handlePhotoUpload = photoDetails => ({
    type: HANDLE_PHOTO_UPLOADED,
    payload: photoDetails,
});

export const handleUploadRequest = () => ({
    type: HANDLE_UPLOAD_REQUEST,
});