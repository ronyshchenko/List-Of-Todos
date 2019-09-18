import React from 'react';
import TodosFilter from './TodosFilter';
import TodoItem from './TodoItem';
import MarkAll from './MarkAll';

export default class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: '',
      nextId: 1,
      items: []      
    };
    this.newItemChanged = this.newItemChanged.bind(this);
    this.newItemKeyDown = this.newItemKeyDown.bind(this);
    this.statusChanged = this.statusChanged.bind(this);
    this.itemRemoved = this.itemRemoved.bind(this);
    this.markAllChanged = this.markAllChanged.bind(this);
    this.displayChanged = this.displayChanged.bind(this);
      }

  newItemChanged(event) {
    this.setState(
      {input: event.target.value}
    );
  }

  newItemKeyDown(event) {
    if (event.key === 'Enter' && this.state.input.trim() !== '') {
      this.setState((state) => {
        const newItem = {
          title: state.input,
            id: state.nextId,
            completed: false
        };
        const newItems = [...state.items, newItem];
        
        return {
          items: newItems,
          nextId: state.nextId + 1,
          input: ''
        };
        });
      
    }
  }

    statusChanged(itemId, completed) {
      this.setState((state) => {
        const newItems = [];
        for (const item of state.items) {
          if (item.id === itemId) {
            newItems.push({
              title:item.title,
              id: item.id,
              completed:completed
            });
          } else {
            newItems.push(item);
          }
        }
        return {
          items: newItems
         };
      });
    }
    itemRemoved(itemId) {
      this.setState(state => {
        return {
          items: state.items.filter(item => item.id !== itemId)
        };
      });
    }

    displayChanged(displayType) {
      this.setState(
        {display: displayType}
      );
    }

    markAllChanged(checked) {
      this.setState(state => {
        return {
          items: state.items.map(item => {
            return {
              title: item.title,
              id: item.id,
              completed: checked
            };
          })
        };
      });
    }

    render () {
      //const itemsComponents = [];
      // {this.state.items.filter(item =>
      //   this.state.display === 'all'
      //   || this.state.display === 'completed' && item.completed
      //   || this.state.display === 'active' && !item.completed)
      //   .map(item => <TodoItem key={item.id} item={item} 
      //     statusChanged={this.statusChanged} itemRemoved={this.itemRemoved}/>)

      // }
      
      
      
      
      // for (const item of this.state.items) {
      //   itemsComponents.push(<TodoItem key={item.id} item={item} 
      //     statusChanged={this.statusChanged} itemRemoved={this.itemRemoved}/>);
      // }

      
    return(
    <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input 
            className="new-todo"
            placeholder="What needs to be done?"
            type="text"
            value={this.state.input}
            onChange={this.newItemChanged} onKeyDown={this.newItemKeyDown} />
        </header>
        <section className="main" style={{ display: 'block' }}>
          

      <MarkAll checked={this.state.items.every(item => item.completed)} changed={this.markAllChanged}/>

          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">

          {this.state.items.map(item => <TodoItem key={item.id} item={item} 
          statusChanged={this.statusChanged} itemRemoved={this.itemRemoved}/>)

      }







                    
        </ul>
          
          </section>
          < TodosFilter left={this.state.items.filter(item => !item.completed).length}
                         display={this.state.display} displayChanged={this.displayChanged} 


                        />
        </section>
    );
  }
}