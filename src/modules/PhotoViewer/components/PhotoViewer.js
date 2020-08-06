import React from 'react';
import {ButtonWrapper} from "../../common/styles";

const PhotoViewer = (props) => {
		const {name, file} = props;
		console.log(file);
		return <ButtonWrapper>
				<div className="container">
						<button className="pixelizer">Pixel it!</button>
				</div>
		</ButtonWrapper>
}

export default PhotoViewer;

