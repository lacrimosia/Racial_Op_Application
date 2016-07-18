import React from 'react';
import data from '../data/data.json';
import Reflection from './Reflection';

class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.list = data.scenarios;
    }

    getInfo(index){
    	console.log(index);

    	return index;
    }

    render() {
        return (<div>

       {
        this.props.list.map(function (b) {
        
         return (
         	<div>
         	<Reflection id={b.picture}  key={b-50}/>
           <button key={b.id} id={b.id} className="test" onClick={this.getInfo.bind(this, b.id)}>
              {b.id}
            </button>
            </div>
          );
        }.bind(this))
      }


        	</div>
    );
   }
}

export default Bottom;
