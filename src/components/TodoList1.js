import React from 'react';
import TodoItem from './TodoList';

export default class TodoList extends React.Component {
    render () {
      const {itemsComponents} = this.props
    return(    
      <div>
        <ul className="todo-list">
      {itemsComponents}


        
        
      
      <li className="">
      
        <div className="view">
          <input type="checkbox" className="toggle" id="todo-1" />
          <label htmlFor="todo-1"></label>
          <button type="button" className="destroy" />
        </div>
      </li>

      
    </ul>
       </div>
    );
  }
}