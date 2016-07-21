'use strict';

import React from 'react';
const data = require('../data/data.json');
const $ = require('jquery');

class Help extends React.Component{
    constructor(props) {
        super(props);
        console.log(React.PropTypes);
    }

    Start(){
    	$('.help_Menu').hide();
    }

    render() {
        return (<div className="help_Menu">
        <div className="keyboard_Div">
            <h1>Internalized Oppression</h1>
            <p>Press the <b className="keyButtons">TAB</b> to navigate each slide or click the numbers.</p>
            <ul>
                <li>
                <b>Keyboard Shortcuts</b></li>
                <li>Start - <b className="keyButtons">S</b></li>
                <li>Reload - <b className="keyButtons">R</b></li>
                <li>Information - <b className="keyButtons">TAB</b></li>
                <li>Help - <b className="keyButtons">H</b> or <b className="keyButtons">?</b></li>
            </ul>
        </div>
        <button className="help_Button" onClick={this.Start.bind(this)}>
            START <i className="fa fa-arrow-right"></i>
        </button>
    </div>
        	);
    }
}

export default Help;
