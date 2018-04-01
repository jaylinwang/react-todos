import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoToggleAll from '../../components/TodoToggleAll';
import TodoActions from '../../actions/TodoActions';

class TodoToggleAllContainer extends Component {
  onChange = (toCompleted) => {
    let { dispatch } = this.props;

    dispatch(TodoActions.toggleAll(toCompleted));
  }

  render() {
    let { allCompleted } = this.props;

    return (
      <TodoToggleAll checked={allCompleted} onChange={this.onChange} />
    );
  }
}

export default connect((state) => {
  let todos = state.todoList;
  return {
    allCompleted: todos.length > 0 && todos.filter(item => item.completed).length === todos.length,
  };
})(TodoToggleAllContainer);
