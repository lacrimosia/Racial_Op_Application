'use strict';

/*const $ = require('jquery');
let t = 50;
$('.box').text(t); */

import React from 'react';
import {render} from 'react-dom';
import Reflection from './Reflection';
import Menu from './Menu';
import Bottom from './Bottom';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
                <Menu />
                 <Reflection />
                 <Bottom />
        	   </div>
    }
}

render(<App />, document.getElementById("App"));
export default App;
