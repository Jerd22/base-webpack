import { createMedia } from "@artsy/fresnel";
import React, { Component, PropTypes } from 'react'
import { hot } from 'react-hot-loader' 
import { Header, Icon, Input, Menu, Segment } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
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
                <Segment as={Media} at="largeScreen" >
                    <Menu color="violet" inverted secondary>
                        <Menu.Item header>
                            <img src={imageUrl} width="120" />
                        </Menu.Item>
                        <Menu.Menu position="left">
                            <Menu.Item 
                                name="category"
                                onClick={()=>{}}
                            />
                        </Menu.Menu>
                        <Menu.Menu position="right" >
                            <Menu.Item>
                                <Input placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Item
                                onClick={()=>{}}
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </Menu.Item>

                        </Menu.Menu>
                    </Menu>
                </Segment> 

                {/*
                <h1>Hello, {this.state.name}</h1>
                <a onClick={this.onClick}>Change</a>
                */}
                </MediaContextProvider>
            </>            
        );
    }
}
 
export default hot(module)(App)