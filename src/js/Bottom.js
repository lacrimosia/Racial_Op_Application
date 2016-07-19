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
    	$('.pictures').html("<img class='animated fadeIn' src='images/"+this.list[index-1].picture+"'/>");
    	return index;
    }

    render() {
        return (<div>
        	<div className="placeArea"><div className="pictures"></div></div>
        	<div className="textArea"><div className="textPortion"></div></div>
       {
        this.props.list.map(function (b) {
        
         return (
           <img key={b.id} src={'images/'+b.id+'.png'} tabIndex={b.id} className="buttons" onClick={this.getInfo.bind(this, b.id)}/>
          );
        }.bind(this))
      }


        	</div>
    );
   }
}

export default Bottom;
