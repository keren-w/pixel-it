import React from 'react';
import styled from 'styled-components';
import {getPhotoInputValidationResult} from "../data/validator";

const PhotoUploader = (props) => {

    const checkInput = (e) => {
        // console.count('checkInput');
        const {files, accept} = e.target;
        const file = files.length > 0 && files[0];
        
        const validationResult = getPhotoInputValidationResult(file, accept);
        const {isValid, message} = validationResult;
        
        if (!isValid) {
            props.setShowToaster(message);
        } else {
            props.handlePhotoUpload(file);
        }
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

        &:hover {
            background-color: rgba(7,7,7,0.2);
        }
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