import React, { Component } from 'react';
import styled from "styled-components";
import Header from "../../Header/Header";
import PhotoUploader from "../../PhotoUploader/components/PhotoUploaderContainer";

class App extends Component {
  render() {
    return (
        <AppWrapper>
          <Header/>
          <PhotoUploader/>
        </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;