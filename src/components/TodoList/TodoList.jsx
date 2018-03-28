import React, { Component } from 'react';
import TodoItem from '../TodoItem';

import './TodoList.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { list } = this.props;
    return (
      <ul className="todo-list">
        {
          list.map(item => (
            <TodoItem
              key={item.id}
              {...item}
            />
          ))
        }
      </ul>
    );
  }
}

export default TodoList;
