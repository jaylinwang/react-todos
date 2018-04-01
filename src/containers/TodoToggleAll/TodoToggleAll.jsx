import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoToggleAll from '../../components/TodoToggleAll';
import TodoStore from '../../store/TodoStore';
import TodoActions from '../../actions/TodoActions';

class TodoToggleAllContainer extends Component {
  static getStores() {
    return [
      TodoStore,
    ];
  }
  static calculateState() {
    let todos = TodoStore.getState();
    return {
      allCompleted: todos.length > 0 && todos.filter(item => item.completed).length === todos.length,
    };
  }

  onChange = (toCompleted) => {
    TodoActions.toggleAll(toCompleted);
  }

  render() {
    return (
      <TodoToggleAll checked={this.state.allCompleted} onChange={this.onChange} />
    );
  }
}

export default Container.create(TodoToggleAllContainer);
