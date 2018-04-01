import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoFooter from '../../components/TodoFooter';
import TodoStore from '../../store/TodoStore';
import FilterStore from '../../store/FilterStore';
import TodoActions from '../../actions/TodoActions';

class TodoFooterContainer extends Component {
  static getStores() {
    return [
      TodoStore,
      FilterStore,
    ];
  }

  static calculateState() {
    return {
      completedCount: TodoStore.getState().filter(item => item.completed).length,
      filterStatus: FilterStore.getState(),
    };
  }

  onClearCompleted = () => {
    TodoActions.clearCompletedTodo();
  }

  onFilterChange = (value) => {
    TodoActions.changeFilter(value);
  }


  render() {
    return (
      <TodoFooter
        completedCount={this.state.completedCount}
        filterStatus={this.state.filterStatus}
        onClearCompleted={this.onClearCompleted}
        onFilterChange={this.onFilterChange}
      />
    );
  }
}


export default Container.create(TodoFooterContainer);
