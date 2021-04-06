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
            activeItem: 'category'
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() { 
        const { activeItem } = this.state
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
                                name='category' 
                                active={activeItem === 'category'} 
                                onClick={this.handleItemClick} 
                            /> 
                        </Menu.Menu> 
                        <Menu.Menu position="right" >
                            <Menu.Item>
                                <Input placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Item 
                                name='สมัครสมาชิก' 
                                active={activeItem === 'สมัครสมาชิก'} 
                                onClick={this.handleItemClick} 
                            />
                            <Menu.Item 
                                name='เข้าสู่ระบบ' 
                                active={activeItem === 'เข้าสู่ระบบ'} 
                                onClick={this.handleItemClick} 
                            />
                        </Menu.Menu>
                    </Menu>
                </Segment> 
            </MediaContextProvider>
        </>            
        );
    }
}
 
export default hot(module)(App)