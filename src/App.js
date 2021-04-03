import React, { Component, PropTypes } from 'react'
import { hot } from 'react-hot-loader' 
import imageUrl from "../src/assets/images/logo.svg";
import './App.css'

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
            <div>
                <img src={imageUrl} width="120" />
                <h1>Hello, {this.state.name}</h1>
                <a onClick={this.onClick}>Change</a>
            </div>            
        );
    }
}
 
export default hot(module)(App)