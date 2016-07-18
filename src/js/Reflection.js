'use strict';

import React from 'react';


class Reflection extends React.Component {
    constructor(props) {
        super(props);
      //  this.title = data.title;
       // this.scenario = data.scenarios;
       // this.pictures = this.scenario.map(s => s.picture);
    }

    render() {
        return (<div> 
            <img src={'images/'+this.props.id} /> {this.props.id}
        </div>
            );
    }
}

export default Reflection;
