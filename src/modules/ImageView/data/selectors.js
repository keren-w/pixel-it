const get = state => state.uploadedPhoto;

export const getPhotoName = state => get(state).name;
export const getPhotoFile = state => get(state).file;
