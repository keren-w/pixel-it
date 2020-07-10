import React from 'react';
import styled from 'styled-components';

const WelcomeMessage = (props) => {
    return (
        props.name ?
        <WelcomeMessageWrapper>
            Welcome {props.name}
        </WelcomeMessageWrapper>
            : null
    );
};

export default WelcomeMessage;

const WelcomeMessageWrapper = styled.div`
    margin-top: 50px;
    font-size: 24px;
    color: white;
    text-align: center;
`;