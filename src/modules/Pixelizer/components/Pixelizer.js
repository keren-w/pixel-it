import React, {useState} from 'react';
import styled from "styled-components";
import {ButtonWrapper} from "../../common/styles";

const Pixelizer = (props) => {
		const [isActive,
				setIsActive] = useState(false);
		return (
				<Wrapper>
						<ButtonWrapper>
								<button className="pixelizer">Pixel it!</button>
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
`;