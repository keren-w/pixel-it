import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Header from "../../Header/Header";
import UploaderView from "../../PhotoUploader/components/PhotoUploaderContainer";
import ImageView from "../../ImageView/components/ImageViewContainer";
import {Toaster} from "./Toaster";
import {theme} from "../../common/theme";

const App = (props) => {
  const {
    showToaster,
    toasterMessage,
    dismissToaster,
    displayUploader
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
      <Header/>
      {displayUploader ?  <UploaderView/> : <ImageView/>}
      {showToaster && <Toaster message={toasterMessage} dismissToaster={dismissToaster}/>}
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div `
    background: ${({theme}) => `transparent linear-gradient(201deg, ${theme.backgroundGradientLight} 0%, ${theme.backgroundGradientDark} 100%) 0% 0% no-repeat padding-box`};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;