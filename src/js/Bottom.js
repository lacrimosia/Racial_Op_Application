import React from 'react';
import data from '../data/data.json';

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
        this.props.list.map(function (note) {
         return (
            <button key={note.id} id={note.id} className="test" onClick={this.getInfo.bind(this, note.id)}>
              {note.id}
            </button>
          );
        }.bind(this))
      }
        	</div>
    );
   }
}

export default Bottom;
