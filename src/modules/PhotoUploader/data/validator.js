export const getPhotoInputValidationResult = (file, accept) => {

    if (file.type !== accept) {
        //throw error wrong file type
        return {isValid: false, message: `Please select only files of type ${accept}`}
    }

    if (file.size > 2097152) {
        // throw error large file
        return {isValid: false, message: 'please upload a file below 2 MB'};
    }

    return {isValid: true, message: ''}
}