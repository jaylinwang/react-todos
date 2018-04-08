import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../../components/TodoList';
import TodoActions from '../../actions/TodoActions';
import { visibleTodoList } from '../../selectors';

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
    return (
      <TodoList
        onItemDelete={this.onItemDelete}
        onItemChange={this.onItemChange}
        list={this.props.todos}
      />
    );
  }
}


export default connect((state) => {
  return {
    todos: visibleTodoList(state),
    filter: state.filterStatus,
  };
})(TodoListContainer);
