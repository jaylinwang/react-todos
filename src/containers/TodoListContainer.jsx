import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoList from '../components/TodoList';
import TodoStore from '../store/TodoStore';

class VisibleTodoList extends Component {
  static getStores() {
    return [
      TodoStore,
    ];
  }

  static calculateState() {
    return {
      todos: TodoStore.getState(),
    };
  }
  render() {
    return <TodoList list={this.state.todos} />;
  }
}


export default Container.create(VisibleTodoList);
