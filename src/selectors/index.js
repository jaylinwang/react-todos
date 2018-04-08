import { createSelector } from 'reselect';

const filterStatus = state => state.filterStatus;
const todoList = state => state.todoList;

export const visibleTodoList = createSelector(
  [filterStatus, todoList],
  (filter, todos) => {
    if (filter === 'active') {
      return todos.filter(item => !item.completed);
    }
    if (filter === 'completed') {
      return todos.filter(item => item.completed);
    }
    return todos;
  }
);
