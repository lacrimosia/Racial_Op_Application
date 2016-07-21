'use strict';

import React from 'react';
import {render} from 'react-dom';
import Menu from './Menu';
import Bottom from './Bottom';
import '../scss/app.scss';
import Help from './Help';
const data = require('../data/data.json');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.list = data.scenarios;
    }

    render() {
        return <div>
                <Menu />
                <Help />
                <Bottom list={this.list} />
        	   </div>
    }
}

render(<App />, document.getElementById("App"));
export default App;
