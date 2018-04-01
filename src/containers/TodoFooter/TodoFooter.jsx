import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoFooter from '../../components/TodoFooter';
import TodoActions from '../../actions/TodoActions';

class TodoFooterContainer extends Component {
  onClearCompleted = () => {
    let { dispatch } = this.props;
    dispatch(TodoActions.clearCompletedTodo());
  }

  onFilterChange = (value) => {
    let { dispatch } = this.props;
    dispatch(TodoActions.changeFilter(value));
  }


  render() {
    let { completedCount, filter } = this.props;

    return (
      <TodoFooter
        completedCount={completedCount}
        filterStatus={filter}
        onClearCompleted={this.onClearCompleted}
        onFilterChange={this.onFilterChange}
      />
    );
  }
}


export default connect((state) => {
  return {
    completedCount: state.todoList.filter(item => item.completed).length,
    filter: state.filterStatus,
  };
})(TodoFooterContainer);
