import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.completedChanged = this.completedChanged.bind(this);
      this.removeClicked = this.removeClicked.bind(this);
    }
    
    completedChanged(event) {
      this.props.statusChanged(this.props.item.id, event.target.checked);
    }

    removeClicked(event) {
      this.props.itemRemoved(this.props.item.id);
      event.preventDefault(); 
    }

    render () {
      return(    
      <li className="">
      <div className="view">
        <input type="checkbox" className="toggle" id="todo-1" checked={this.props.item.completed} onChange={this.completedChanged} />
        <label ><span className={this.props.item.completed ? 'completed' : 'active'} >{this.props.item.title}</span></label>
        <button type="button" className="destroy" onClick={this.removeClicked} />
      </div>
    </li>
    );
  }
}