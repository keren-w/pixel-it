import React, {useEffect} from 'react';
import styled from 'styled-components';

export const Toaster = (props) => {
    const {message, dismissToaster} = props;

    useEffect(() => {
        window.alert(message);
        dismissToaster();
    }, [message, dismissToaster]);

    return (
        <Backdrop/>
    )
}

const Backdrop = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
`;
