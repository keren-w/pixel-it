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
    color: white;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 5px;
    box-shadow: black 2px 2px 6px;
    border: none;
    background-color: transparent;
    margin: none;

    &:hover {
        background-color: rgba(7,7,7,0.2);
    }
    &:focus {
        outline: none;
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