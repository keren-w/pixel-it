import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Header from "../../Header/Header";
import PhotoUploader from "../../UploaderView/components/PhotoUploaderContainer";
import PhotoViewer from "../../ImageView/components/PhotoViewerContainer";
import {Toaster} from "./Toaster";
import {theme} from "../../common/theme";

const App = (props) => {
  const {
    showToaster,
    toasterMessage,
    dismissToaster,
    displayViewer
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
      <Header/>
      {displayViewer ? <PhotoViewer/> : <PhotoUploader/>}
      {showToaster && <Toaster message={toasterMessage} dismissToaster={dismissToaster}/>}
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div `
    background: ${({theme}) => `transparent linear-gradient(201deg, ${theme.backgroundGradientLight} 0%, ${theme.backgroundGradientDark} 100%) 0% 0% no-repeat padding-box`};
    height: calc(100vh - 17px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;