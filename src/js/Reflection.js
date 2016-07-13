'use strict';

import React from 'react';
const data = require('../data/data.json');

class Reflection extends React.Component {
    constructor(props) {
        super(props);
        this.title = data.title;
        this.scenario = data.scenarios;
        this.pictures = this.scenario.map(s => s.picture);
        console.log(this.pictures);
    }

    checkName(){
        if(this.pictures.length > 1){
            console.log("hello");
        }
    }
   
    render() {
        return (<div>
               <h1>Changing Photo</h1>
                <p>{this.pictures}</p>
                <h3>{this.checkName()}</h3>
                </div>
            );
    }
}

export default Reflection;
