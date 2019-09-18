import React from 'react';

export default class MarkAll extends React.Component {
    render () {
    return(    
        <input type="checkbox" id="toggle-all" className="toggle-all" checked={this.props.checked} 
          onChange={event => this.props.changed(event.target.checked)} />
    );
  }
}