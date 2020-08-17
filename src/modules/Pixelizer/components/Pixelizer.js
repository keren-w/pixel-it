import React from 'react';
import styled from "styled-components";
import {ButtonWrapper} from "../../common/styles";

const Pixelizer = (props) => {
		const {isHidden} = props;
		return (
				<Wrapper isHidden={isHidden}>
						<ButtonWrapper>
								<button className="pixelizer" onClick={() => {}}>Pixel it!</button>
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