'use strict';

import React from 'react';
const data = require('../data/data.json');
const $ = require('jquery');
import hotkey from 'react-hotkey';
hotkey.activate();

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.show = true;
        this.disabled = true;
        this.hotkeyHandler = this.keyboardShortcuts.bind(this);
    }

    reload() {
        location.reload();
    }

     keyboardShortcuts(e) {
        if(e.keyCode == 82){
            // R Key
            this.reload();
        }else if(e.keyCode == 72 && this.disabled == false || e.keyCode == 191 && this.disabled == false ){
            // h or ? KEY
            this.show = !this.show;
            this.show ? this.openHelp() : this.closeHelp();
            console.log("Help", this.show);
            $('.help_Button').html("Close "+"<i class='fa fa-times'></i>");
        } else if(e.keyCode == 83 && this.disabled == true){
            // START key - S
            this.start();
            console.log("start", this.show);
            $('.help_Button').html("START "+"<i class='fa fa-arrow-right'></i>");
        }
     }

     componentDidMount() {
        hotkey.addHandler(this.hotkeyHandler);
    }
 
    componentWillUnmount() {
        hotkey.removeHandler(this.hotkeyHandler);
    }

    openHelp(){
        $('.help_Menu').show();
    }

    closeHelp(){
        $('.help_Menu').hide();
    }

    start(){
        this.show = false;
        this.disabled = false;
        $('.help_Menu').hide();
    }

    render() {
        return (<div >
        <div className="header">
        	<div className="menu">
        		<button className="reload btn" title="Reload" onClick={this.reload.bind(this)}><i className="fa fa-refresh"></i> Reload</button>
        		<button className="help btn" title="Help Menu" onClick={this.openHelp.bind(this)}><i className="fa fa-question-circle"></i> Help</button>
        	</div>
        </div>
        	</div>// end div
        		
        	);
    }
}

export default Menu;
