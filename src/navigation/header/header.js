import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Headers extends Component {

    render(){
        return(
            <Segment inverted color="violet">
                
            </Segment>
        )
    }
}

Headers.propTypes = {
    name: PropTypes.string
  };

export default Headers;