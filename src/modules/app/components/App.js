import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Header from "../../Header/Header";
import PhotoUploader from "../../PhotoUploader/components/PhotoUploaderContainer";
import PhotoViewer from "../../PhotoViewer/components/PhotoViewerContainer";
import {Toaster} from "./Toaster";
import {theme} from "../../common/theme";

const App = (props) => {
  const {showToaster, toasterMessage, dismissToaster} = props;
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
      <Header/>
      <PhotoUploader/>
      <PhotoViewer/>
      {showToaster && <Toaster message={toasterMessage} dismissToaster={dismissToaster}/>}
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div `
    background-color: #282c34;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;