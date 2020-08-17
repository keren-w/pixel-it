import React from 'react';
import styled from "styled-components";
import {ButtonWrapper} from "../../common/styles";

const Pixelizer = (props) => {
		const {isHidden, pixelizerClicked} = props;
		return (
				<Wrapper isHidden={isHidden}>
						<ButtonWrapper>
								<button disabled={true} className="pixelizer" onClick={pixelizerClicked}>Pixel it!</button>
						</ButtonWrapper>
				</Wrapper>
		)
}

export default Pixelizer;

const Wrapper = styled.div `
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	visibility: ${props => props.isHidden
		? `hidden`
		: `visible`}
`;