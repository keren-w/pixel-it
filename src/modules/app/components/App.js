import React from 'react';
import styled from "styled-components";
import Header from "../../Header/Header";
import PhotoUploader from "../../PhotoUploader/components/PhotoUploaderContainer";
import PhotoViewer from "../../PhotoViewer/components/PhotoViewerContainer";
import {Toaster} from "./Toaster";

const App = (props) => {
  const {showToaster, toasterMessage, dismissToaster} = props;
  return (
    <AppWrapper>
      <Header/>
      <PhotoUploader/>
      <PhotoViewer/>
      {showToaster && <Toaster message={toasterMessage} dismissToaster={dismissToaster}/>}
    </AppWrapper>
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