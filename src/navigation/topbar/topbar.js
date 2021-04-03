import React,{ Component, PropTypes  } from "react";
import { Segment } from "semantic-ui-react";
import Menus from "../menu/menus";

class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

    }

    render(){
        return(
            <Segment inverted color="violet">
                <Menus />
            </Segment>
        )   
    }
}

export default Topbar;