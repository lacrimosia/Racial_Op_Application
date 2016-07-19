'use strict'

import React from 'react';
import data from '../data/data.json';
import Reflection from './Reflection';
const $ = require('jquery');

class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.list = data.scenarios;
        this.init();
    }

    getInfo(index){
    	console.log(index);
    	let Index = index-1;
    	let newSrc = "images/"+index+"-h.png";
    	let oldSrc = "images/"+index+".png";
    this.list[Index].active = !this.list[Index].active;
    console.log('active', this.list[Index].active);
     this.list[Index].active ? $('#'+index).attr('src', newSrc) : $('#'+index).attr('src', oldSrc);

    	$('.pictures').html("<img class='animated fadeIn' src='images/"+this.list[Index].picture+"'/>");
    	$('.textPortion').text(this.list[Index].text);

        
    	return index;
    }

    init(){
    	this.list[0].active = true;
    }

    render() {
       return (<div>
        	<div className="placeArea"><div className="pictures"><img className="animated fadeIn" src={'images/'+this.list[0].picture}/></div></div>
        	<div className="textArea"><div className="textPortion animated fadeIn">{this.list[0].text}</div></div>
       {
        this.props.list.map(function (b) {
         if(b.id > 1){
         	return (
           <img key={b.id} src={'images/'+b.id+'.png'} id={b.id} tabIndex={b.id} className="buttons" onClick={this.getInfo.bind(this, b.id)}/>
          );
      }else{
      	return (
           <img key={b.id} src={'images/'+b.id+'-h.png'} id={b.id} tabIndex={b.id} className="buttons" onClick={this.getInfo.bind(this, b.id)}/>
          );
      }
        }.bind(this))
      }


        	</div>
    );
   }
}

export default Bottom;
