import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoFooter from '../../components/TodoFooter';
import TodoStore from '../../store/TodoStore';
import FilterStore from '../../store/FilterStore';

class VisibleTodoList extends Component {
  static getStores() {
    return [
      TodoStore,
      FilterStore,
    ];
  }

  static calculateState() {
    return {
      todos: TodoStore.getState(),
    };
  }

  onClearCompleted = (value) => {

  }

  onFilterChange = (value) => {

  }


  render() {
    return (
      <TodoFooter
        onClearCompleted={this.onClearCompleted}
        onFilterChange={this.onFilterChange}
      />
    );
  }
}


export default Container.create(VisibleTodoList);
