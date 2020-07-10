import React, {useState} from 'react';
import styled from 'styled-components';

const DEFAULT_VALIDATION_RESULT = {
    isValid: true,
    message: ''
};

const PhotoUploader = (props) => {

    const [validationResult,
        setValidationResult] = useState(DEFAULT_VALIDATION_RESULT);

    const checkInput = (e) => {
        const {files, accept} = e.target;
        const file = files.length > 0 && files[0];
        setValidationResult(getPhotoInputValidationResult(file, accept));
    }

    const getPhotoInputValidationResult = (file, accept) => {
        if (!file) {
            return {isValid: false, message: 'No file selected'};
        }

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

    if (!validationResult.isValid) {
        alert(validationResult.message);
    }

    return (
        <UploderWrapper>
            F<label htmlFor="file">Upload a photo:
                <input
                    className="user-file"
                    id="file"
                    type="file"
                    accept="image/jpeg"
                    onInput={checkInput}/>
            </label>
        </UploderWrapper>
    );
}

export default PhotoUploader;

const UploderWrapper = styled.div `
    margin-top: 50px;
    width: 300px;
`;