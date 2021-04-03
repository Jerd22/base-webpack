import { createMedia } from "@artsy/fresnel";
import React, { Component, PropTypes } from 'react'
import { hot } from 'react-hot-loader' 
import { Segment } from 'semantic-ui-react';
import imageUrl from "../src/assets/images/logo.svg";
import './App.css'

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

class  App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '123'
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState({
            name : 'Jerd221'
        })
    }

    render() {
        return (
            <>
                <style>{mediaStyles}</style>
                <MediaContextProvider>
                <Segment as={Media} at="mobile" color="violet" >123</Segment>
                <img src={imageUrl} width="120" />
                <h1>Hello, {this.state.name}</h1>
                <a onClick={this.onClick}>Change</a>
                </MediaContextProvider>

            </>            
        );
    }
}
 
export default hot(module)(App)