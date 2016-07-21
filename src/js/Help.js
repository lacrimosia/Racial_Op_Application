'use strict';

import React from 'react';
const data = require('../data/data.json');
const $ = require('jquery');
import hotkey from 'react-hotkey';
hotkey.activate();

class Help extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="help_Menu">
        <div className="keyboard_Div">
            <h1>Internalized Oppression</h1>
            <p>Press the <b className="keyButtons">TAB</b> to navigate each slide or press the keyboard shortcuts.</p>
            <ul>
                <li>
                <b>Keyboard Shortcuts</b></li>
                <li>Start - <b className="keyButtons">S</b></li>
                <li>Reload - <b className="keyButtons">R</b></li>
                <li>Information - <b className="keyButtons">TAB</b></li>
                <li>Help - <b className="keyButtons">H</b></li>
            </ul>
        </div>
        <button className="help_Button">
            START <i className="fa fa-arrow-right"></i>
        </button>
    </div>
        	);
    }
}

export default Help;
