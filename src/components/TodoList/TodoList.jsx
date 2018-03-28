import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';

import './TodoList.scss';

class TodoList extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onItemChange: PropTypes.func,
    onItemDelete: PropTypes.func,
  }
  static defaultProps = {
    list: [],
    onItemChange: () => {},
    onItemDelete: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onItemChange = (id, todo) => {
    this.props.onItemChange(id, todo);
  }

  onItemDelete = (id) => {
    this.props.onItemDelete(id);
  }

  render() {
    let { list } = this.props;
    return (
      <ul className="todo-list">
        {
          list.map(item => (
            <TodoItem
              {...item}
              key={item.id}
              onChange={this.onItemChange}
              onDelete={this.onItemDelete}
            />
          ))
        }
      </ul>
    );
  }
}

export default TodoList;
