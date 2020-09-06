import React, {useRef, useEffect} from 'react';
import {getPhotoInputValidationResult} from "../data/validator";

const Uploader = (props) => {
	const {handlePhotoUpload, setShowToaster, hideUploaderButton} = props;
	const inputRef = useRef(null);

	useEffect(() => {
		if (hideUploaderButton && inputRef) {
			const {current} = inputRef;
			const event = new MouseEvent('click', {
				view: window,
				bubbles: true,
				cancelable: true
			  });
			current.dispatchEvent(event);
		}

	}, [inputRef]);

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

				return (<input
								style={{visibility: hideUploaderButton ? `hidden` : `visible`}}
								className="user-file"
								ref={inputRef}
								id="photo-input"
								type="file"
								accept="image/jpeg"
								onInput={checkInput}/>);
}

export default Uploader;