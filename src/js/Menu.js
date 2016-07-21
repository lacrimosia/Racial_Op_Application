'use strict';

import React from 'react';
const data = require('../data/data.json');
const $ = require('jquery');
import hotkey from 'react-hotkey';
hotkey.activate();

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.show = false;
        this.hotkeyHandler = this.keyboardShortcuts.bind(this);
    }

    reload() {
        location.reload();
    }

     keyboardShortcuts(e) {
        if(e.keyCode == 82){
            // R Key
            this.reload();
        }  
        if(e.keyCode == 72 || e.keyCode == 191){
            // h or ? KEY
            this.help();
        } 
     }

     componentDidMount() {
        hotkey.addHandler(this.hotkeyHandler);
    }
 
    componentWillUnmount() {
        hotkey.removeHandler(this.hotkeyHandler);
    }

    help(){
        alert("this is help");
    }

    render() {
        return (<div >
        <div className="header">
        	<div className="menu">
        		<button className="reload btn" title="Reload" onClick={this.reload.bind(this)}><i className="fa fa-refresh"></i> Reload</button>
        		<button className="help btn" title="Help Menu" onClick={this.help.bind(this)}><i className="fa fa-question-circle"></i> Help</button>
        	</div>
        </div>
        	</div>// end div
        		
        	);
    }
}

export default Menu;
