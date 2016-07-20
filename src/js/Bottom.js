'use strict'

import React from 'react';
const $ = require('jquery');
import hotkey from 'react-hotkey';
hotkey.activate();

// Bottom Navigation Component for changing the picture & text
class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.list = this.props.list;  // content list from main.js
        this.hotkeyHandler = this.keyboardShortcuts.bind(this);
        this.count = 0;
    }

     keyboardShortcuts(e) {
     	e.preventDefault();
        if(e.keyCode == 39){   	
        // RIGHT ARROW KEY
        //	this.tabIndex = $('.buttons:focus').attr('tabindex'); 
        	if(this.count < this.list.length-1){
        		++this.count;
        		console.log('the count', this.count);
        		this.getInfo(this.count);
        	}else{
        		this.count = -1;
        	}
        		
        }
        if(e.keyCode == 37){   
        	// LEFT ARROW KEY	
        	if(this.count > 0){
        		--this.count;
        		console.log('the count', this.count);
        		this.getInfo(this.count);
        	}else{
        		this.count = -1;
        	}
        		
        }
    }
 
    componentDidMount() {
        hotkey.addHandler(this.hotkeyHandler);
    }
 
    componentWillUnmount() {
        hotkey.removeHandler(this.hotkeyHandler);
    }

    getInfo(index){
    	// loop through all elements and change the current to true and unselected to false
        for(var i=0; i<this.list.length; i++){
        		if(i === index){
        			this.list[index].active = true;
        			$('#'+(index+1)).attr('src', "images/"+(index+1)+"-h.png");
        			// console.log('this is i', i+1);
        		}else{
        			this.list[i].active = false;
        			$('#'+(i+1)).attr('src', "images/"+(i+1)+".png");
        		}    		     	
        }

    	$('.pictures').html("<img class='animated fadeIn' src='images/"+this.list[index].picture+"'/>");
    	$('.textPortion').text(this.list[index].text); 
    	return index;
    }

    render() {
       return (<div>
        	<div className="placeArea"><div className="pictures"><img className="animated fadeIn" src={'images/'+this.list[0].picture}/></div></div>
        	<div className="textArea"><div className="textPortion animated fadeIn">{this.list[0].text}</div></div>
       {
        this.props.list.map(function (b) { 
        if(b.id == 0){
        	return (
           <img key={b.id} src={'images/'+(b.id+1)+'-h.png'} id={(b.id+1)} tabIndex={b.id} className="buttons" onClick={this.getInfo.bind(this, b.id)}/>
          );
        }
        return (
           <img key={b.id} src={'images/'+(b.id+1)+'.png'} id={(b.id+1)} tabIndex={b.id} className="buttons" onClick={this.getInfo.bind(this, b.id)}/>
          );
        }.bind(this))
      }
        	</div>
    );
   }
}

export default Bottom;
