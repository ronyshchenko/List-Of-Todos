import React from 'react';
import './TodoItem.css';

export default class InfoPanel extends React.Component {
    render () {
    return(
        <section className="info-panel display">    
          <span className="items-left" >
            {this.props.left} items left
          </span>
          <span className ="display">
             {['all', 'active', 'completed'].map(item =>
            <span className={this.props.display === item ? 'selected' : ''}
             onClick={() => this.props.displayChanged(item)}>{item}</span>
             )}
             </span>    
             {
               this.props.completed ? <span onClick={(event) => {
                 this.props.removeClicked();
            event.preventDefault();
            }}>clear completed</span> : null}
        </section>
    );
  }
}