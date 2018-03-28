import React, { Component } from 'react';
import TodoItem from '../TodoItem';

import './TodoList.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="todo-list">
        <TodoItem completed />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    );
  }
}

export default TodoList;
