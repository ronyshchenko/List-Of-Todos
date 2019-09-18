import React from 'react';

export default class TodoFilter extends React.Component {
    render () {
    return(    
        <footer className="footer" style={{ display: 'block' }}>
          <span className="todo-count">
            {this.props.left} items left
          </span>

          {/* <span className ="">
            {['all', 'active', 'completed'].map(item =>
            <span classNmame={this.props.display === item ? 'selected' : ''}
            onClick={() => this.props.displayChanged(item)}>{item}    </span>

            )

            }
            </span>    */}

          <ul className="filters">
            <li>
             <a href="#/" className={this.props.display === 'all' ? 'selected' : ''}
              onClick={() => this.props.displayChanged('all')}>All</a>
            </li>
  
            <li>
              <a href="#/active" className={this.props.display === 'active' ? 'selected' : ''
            } onClick={() => this.props.displayChanged('active')}>Active</a>
            </li>
  
            <li>
              <a href="#/completed" className={this.props.display === 'completed' ? 'selected' : ''}
              onClick={() => this.props.displayChanged('completed')}>Completed</a>
            </li>
          </ul>
  
          <button
            type="button"
            className="clear-completed"
            style={{ display: 'block' }}
          />
        </footer>
    );
  }
}