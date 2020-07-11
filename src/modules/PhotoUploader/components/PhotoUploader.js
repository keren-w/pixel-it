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
        
        const validationResult = getPhotoInputValidationResult(file, accept);
        setValidationResult(validationResult);
        validationResult.isValid && props.handlePhotoUpload(file);
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

    if (!validationResult.isValid) { // todo: make this happen only when validationResult changes (no re-render)
        alert(validationResult.message);
    }

    return (
        <UploderWrapper>
            <label htmlFor="file">Upload a photo
                <input
                    className="user-file"
                    id="photo-input"
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

    label {
        position: relative;
        font-size: 1.15em;  
        color: white;
        display: inline-block;
        padding: 5px 15px;
        border-radius: 5px;
        box-shadow: black 2px 2px 6px;
    }
    
    #photo-input {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        position: absolute;
    }
`;