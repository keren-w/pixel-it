import React from 'react';
import styled from 'styled-components';
import {getPhotoInputValidationResult} from "../data/validator";
import {ButtonWrapper} from "../../common/styles";

const PhotoUploader = (props) => {
				const {name} = props;
				const checkInput = (e) => {
								const {files, accept} = e.target;
								const file = files.length > 0 && files[0];

								const validationResult = getPhotoInputValidationResult(file, accept);
								const {isValid, message} = validationResult;

								if (!isValid) {
												props.setShowToaster(message);
												e.target.value = null; // nullify input so to revalidate onChange

								} else if (file) {
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
												{name && <FileName>{name}</FileName>}
								</UploderWrapper>
				);
}

export default PhotoUploader;

const UploderWrapper = styled(ButtonWrapper)`
	flex: 1;
	align-items: center;
	#photo-input {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		position: absolute;
	}
`;

const FileName = styled.span `
	margin-top: 1rem;
	color: white;
	font-size: 0.85rem;
	margin-left: 1.5rem;
`;