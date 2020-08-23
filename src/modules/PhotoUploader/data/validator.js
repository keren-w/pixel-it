const TOP_LIMIT_SIZE = 2097152;

export const getPhotoInputValidationResult = (file, accept) => {
    const {type, size} = file;

    if (type && type !== accept) {
        //throw error wrong file type
        return {isValid: false, message: `Please select only files of type ${accept}`}
    }

    if (size && size > TOP_LIMIT_SIZE) {
        // throw error large file
        return {isValid: false, message: 'please upload a file below 2 MB'};
    }

    return {isValid: true, message: ''}
}