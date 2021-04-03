import React,{ Component, PropTypes  } from "react";
import { NavLink } from "react-router-dom";
import { Men, Input } from "semantic-ui-react";

class Menus extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem : 'home'
        };
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick = (e, { name }) => {
        this.setState({activeItem : name })
    }

    render(){
        const { activeItem } = this.state
        return(
            <Menu secondary>
                <Menu.Item 
                    as={NavLink} to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item 
                     as={NavLink} to='/newitem'
                     name='newitem'
                     active={activeItem === 'newitem'}
                     onClick={this.handleItemClick}                   
                />

            </Menu>
        )   
    }
}

export default Menus;