import React from 'react';
import styled from "styled-components";
import {ButtonWrapper} from "../../common/styles";

const Pixelizer = (props) => {
		const {isHidden, pixelizerClicked} = props;
		return (
				<Wrapper isHidden={isHidden}>
						<PixelitButtonWrapper>
								<button disabled={false} className="pixelizer" onClick={pixelizerClicked}>Pixel it!</button>
						</PixelitButtonWrapper>
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

const PixelitButtonWrapper = styled(ButtonWrapper)`
button {
	height: 4rem;
}`;