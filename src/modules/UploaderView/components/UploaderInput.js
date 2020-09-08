import React, {useRef} from 'react';
import styled from "styled-components";
import uploadIcon from "../../../assets/images/upload-icon.svg";
import {getPhotoInputValidationResult} from "../data/validator";

const UploaderInput = (props) => {
	const {handlePhotoUpload, setShowToaster, hideUploaderButton} = props
	const inputRef = useRef(null);

	const checkInput = (e) => {
		const {files, accept} = e.target;
		const file = files.length > 0 && files[0];

		const validationResult = getPhotoInputValidationResult(file, accept);
		const {isValid, message} = validationResult;

		if (!isValid) {
						setShowToaster(message);
						e.target.value = null; // nullify input so to revalidate onChange
		} else if (file) {
						handlePhotoUpload(file);
		}
	}

	const getUploaderInput = () => (<input
		className="user-file"
		ref={inputRef}
		id="photo-input"
		type="file"
		accept="image/jpeg"
		onInput={checkInput}/>);
			

					return (
						hideUploaderButton ? 
							<ButtonlessWrapper> 
								<img src={uploadIcon} alt={'Upload'}/>
								<span>Upload</span>
								{getUploaderInput()}
							</ButtonlessWrapper>
							:
						getUploaderInput()
						);
}

export default UploaderInput;

const ButtonlessWrapper = styled.div`
	display: flex;
    align-items: center; 
	position: relative;
	img {
        height: 20px;
	}
	span {
		margin-left: 10px;
	}
	input {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		position: absolute;
	}
`;