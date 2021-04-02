import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'



export default class MenuMenus extends Component {
    state = {}

    let history = useHistory();

    handleItemClick = (e, { name, to }) => this.setState({ activeItem: name }) history.push(to)

    render() { 
        const { activeItem } = this.state
        
        return (
            <Menu>
                <Menu.Item 
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    to='/home' 
                >
                    Home
                </Menu.Item>
            </Menu>
        )
    }
}