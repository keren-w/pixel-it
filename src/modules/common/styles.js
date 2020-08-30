import styled from 'styled-components';

export const ButtonWrapper = styled.div `
margin: 25px 0;
width: 60%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: baseline;

label, button {
    position: relative;
    font-size: 1.15em;  
    background-color: ${({theme}) => theme.buttonColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: rgba(0,0,0,0.2) -1px 22px 20px 2px;
    border: none;
    margin: 0;
    height: 5.5rem;
    width: 14rem;

    &:hover !&[disabled] {
        background-color: rgba(7,7,7,0.2);
    }
    &:focus {
        outline: none;
    }
    &[disabled] {
        color: rgba(255,255,255,.2);
        box-shadow: rgba(0,0,0,.6) 2px 2px 6px;
    }
}

#photo-input {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    position: absolute;
}
`;