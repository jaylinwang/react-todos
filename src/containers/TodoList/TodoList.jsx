import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoList from '../../components/TodoList';
import TodoStore from '../../store/TodoStore';
import FilterStore from '../../store/FilterStore';
import TodoActions from '../../actions/TodoActions';

class TodoListContainer extends Component {
  static getStores() {
    return [
      TodoStore,
      FilterStore,
    ];
  }

  static calculateState() {
    let todos = TodoStore.getState();
    let filter = FilterStore.getState();
    let visibleTodos = todos;
    if (filter === 'active') {
      visibleTodos = todos.filter(item => !item.completed);
    }
    if (filter === 'completed') {
      visibleTodos = todos.filter(item => item.completed);
    }

    return {
      todos: visibleTodos,
    };
  }

  onItemChange = (id, todo) => {
    TodoActions.updateTodo(id, todo);
  }

  onItemDelete = (id) => {
    TodoActions.deleteTodo(id);
  }

  render() {
    return (
      <TodoList
        onItemDelete={this.onItemDelete}
        onItemChange={this.onItemChange}
        list={this.state.todos}
      />
    );
  }
}


export default Container.create(TodoListContainer);
