'use strict';

import React from 'react';


class Reflection extends React.Component {
    constructor(props) {
        super(props);
      //  this.title = data.title;
       // this.scenario = data.scenarios;
       // this.pictures = this.scenario.map(s => s.picture);
    }

    checkName(){
        if(this.pictures.length > 1){
            console.log("hello");
        }
    }
   
    render() {
        return (<div> 
        </div>
            );
    }
}

export default Reflection;
