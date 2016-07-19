import React from 'react';
const data = require('../data/data.json');
const $ = require('jquery');
let off = false;

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Menu';
        this.title = data.title;
        this.instructions = data.instructions;
        this.openBox = this.openBox.bind(this);
        this.reflect = "fwwef";
    }

    reloadPage() {
        location.reload();
    }

    openBox(box){	
    	console.log(box);
    	off = !off;
    	if(off==true){
    		$('#App').css({
    		background: 'pink',
    		transition: 'linear 0.8s background'
    	  });
    	}else{
    		$('#App').css({
    		background: 'yellow',
    		transition: 'linear 0.8s background'
    	  });
    	}
    	
    }

    render() {
        return (<div >  // start div
        <div className="header">
        	<div className="titles"><h5>{this.title} - Interactive</h5></div>
        	<div className="menu">
        		<button className="reload btn" title="Reload"><i className="fa fa-refresh"></i> Reload</button>
        		<button className="help btn" title="Help Menu" onClick={()=>this.openBox(this.reflect)}><i className="fa fa-question-circle"></i> Help</button>
        	</div>
        </div>
        	</div>// end div
        		
        	);
    }
}

export default Menu;
