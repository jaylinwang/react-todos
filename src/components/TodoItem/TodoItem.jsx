import React, { Component } from 'react';
import cx from 'classnames';
import './TodoItem.scss';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  onChange = (event) => {
    this.setState({
      completed: event.target.checked,
    });
  }

  render() {
    const { completed } = this.state;

    return (
      <li
        className={cx({
          'todo-item': true,
          completed,
        })}
        onClick={this.handleTodoClick}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.onChange}
          />
          <label>{  }</label>
          <button className="destory" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
