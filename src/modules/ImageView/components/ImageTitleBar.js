import React from 'react';
import styled from "styled-components";
import uploadIcon from "../../../assets/images/upload-icon.svg";

const ImageTitleBar = (props) => {
const {name} = props;
    return (
        <Wrapper>
            <ActionWrapper>
                <span>{name}</span>
            </ActionWrapper>
            <ActionWrapper onClick={() => {}}>
                <img src={uploadIcon} alt={'Upload'}/>
                <span>Upload</span>
            </ActionWrapper>
        </Wrapper>
    )
};
export default ImageTitleBar;

const Wrapper = styled.div `
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const ActionWrapper = styled.div `
    display: flex;
    align-items: center; 
    height: 25px;
    font-size: 15px;
    img {
        height: 20px;
    }
    &:first-child {
        padding-right: 25px;
        border-right: 1px solid ${({theme}) => theme.logoColor};
        span {
            opacity: 0.32;
        }
    }
    &:not(:first-child) {
        padding-left: 25px;
        span {
            margin-left: 10px;
        }
    }
    ${({onClick}) => onClick ? `cursor: pointer;` : ``}
`;