import React from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/Pixelizer";

const PhotoViewer = (props) => {
		// const {name, file} = props;
		// console.log(file);
		return (
				<ViewerWrapper>
						<Pixelizer/>
						<canvas className="my-canvas"/>
				</ViewerWrapper>
		)
}

export default PhotoViewer;

const ViewerWrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`;