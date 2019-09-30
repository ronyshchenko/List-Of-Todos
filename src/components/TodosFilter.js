import React from 'react';

export default class TodoFilter extends React.Component {
    render () {
    return(    
        <footer className="footer" style={{ display: 'block' }}>
          <span className="todo-count">
            {this.props.left} items left
          </span>

          <span className ="display filters">
            {['all', 'active', 'completed'].map(item =>
            <span key={item} className={this.props.display === item ? 'selected' : ''}
            onClick={() => this.props.displayChanged(item)}>{item}</span>
            )}
            </span>    
            {this.props.completed ? <button
            type="button"
            className="clear-completed"
            style={{ display: 'block' }} onClick={
              (event) => {
                this.props.removeClicked();
                event.preventDefault();
              }} /> : null
          }
        </footer>
    );
  }
}