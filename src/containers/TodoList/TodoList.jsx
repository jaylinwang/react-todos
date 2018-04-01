import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../../components/TodoList';
import TodoActions from '../../actions/TodoActions';

class TodoListContainer extends Component {
  onItemChange = (id, todo) => {
    let { dispatch } = this.props;
    dispatch(TodoActions.updateTodo(id, todo));
  }

  onItemDelete = (id) => {
    let { dispatch } = this.props;
    dispatch(TodoActions.deleteTodo(id));
  }

  render() {
    let { todos, filter } = this.props;
    let visibleTodos = todos;
    if (filter === 'active') {
      visibleTodos = todos.filter(item => !item.completed);
    }
    if (filter === 'completed') {
      visibleTodos = todos.filter(item => item.completed);
    }
    return (
      <TodoList
        onItemDelete={this.onItemDelete}
        onItemChange={this.onItemChange}
        list={visibleTodos}
      />
    );
  }
}


export default connect((state) => {
  return {
    todos: state.todoList,
    filter: state.filterStatus,
  };
})(TodoListContainer);
