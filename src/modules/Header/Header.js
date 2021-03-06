import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/Pixelit_svg.svg";

const Header = (props) => {
    return (
        <HeaderWrapper>
            <img src={logo} alt={'Pixel It!'}/>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    font-size: 32px;
    color: ${({theme}) => theme.logoColor};
    width: 100%;
    margin-top: 5px;
    padding-left: 2rem;

    img {
        height: 25px;
    }
`;