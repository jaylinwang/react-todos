import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoInput from '../components/TodoInput';
import TodoStore from '../store/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoInputContainer extends Component {
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

  onEnter = (title) => {
    TodoActions.addTodo(title);
  }

  render() {
    return <TodoInput onEnter={this.onEnter} />;
  }
}


export default Container.create(TodoInputContainer);
