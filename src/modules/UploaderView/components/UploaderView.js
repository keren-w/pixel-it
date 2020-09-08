import React from 'react';
import styled from 'styled-components';
import {ButtonWrapper} from "../../common/styles";
import uploadSymbol from "../../../assets/images/upload.svg";
import UploaderInput from "./UploaderInput";

const PhotoUploader = (props) => {
				const {name, hideUploaderButton} = props;
				return ( hideUploaderButton ?
					<UploaderInput {...props} /> :
					<UploderWrapper>
							<UploaderFrame>
									<img src={uploadSymbol} alt={'Upload'}/>
									<label htmlFor="file">Upload
													<UploaderInput {...props} />
									</label>
									{name && <FileName>{name}</FileName>}
							</UploaderFrame>
					</UploderWrapper>
				);
}

export default PhotoUploader;

const UploderWrapper = styled(ButtonWrapper)`
	margin: 0;
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

const UploaderFrame = styled.div`
	border: 2px solid ${({theme}) => theme.borderColor};
	border-radius: 8px;
    height: 70%;
    width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 6rem;

	img {
		width: 88px;
		height: calc(50% - 2rem);
    	margin-top: 2rem;
}
`;

const FileName = styled.span `
	margin-top: 1rem;
	color: white;
	font-size: 0.85rem;
	margin-left: 1.5rem;
`;