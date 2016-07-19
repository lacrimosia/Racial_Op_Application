'use strict'

import React from 'react';
import data from '../data/data.json';
import Reflection from './Reflection';
const $ = require('jquery');

class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.list = data.scenarios;
    }

    getInfo(index){
    	console.log(index);
    	return index;
    }

    render() {
        return (<div>
        	
       {
        this.props.list.map(function (b) {
        
         return (
           <img key={b.id} src={'images/'+b.id+'.png'} className="buttons" onClick={this.getInfo.bind(this, b.id)}/>
          );
        }.bind(this))
      }


        	</div>
    );
   }
}

export default Bottom;
