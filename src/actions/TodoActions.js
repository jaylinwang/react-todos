import ActionTypes from '../constants/ActionTypes';
import TodoDispatcher from '../dispatchers/TodoDispatcher';

export default {
  addTodo(title) {
    TodoDispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      payload: {
        title,
      },
    });
  },
  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: ActionTypes.DELETE_TODO,
      payload: {
        id,
      },
    });
  },
  updateTodo(id, todo) {
    TodoDispatcher.dispatch({
      type: ActionTypes.UPDATE_TODO,
      payload: {
        id,
        todo,
      },
    });
  },
  clearCompletedTodo() {
    TodoDispatcher.dispatch({
      type: ActionTypes.CLEAT_COMPLETED,
    });
  },
  toggleAll(toCompleted) {
    TodoDispatcher.dispatch({
      type: ActionTypes.TOGLLE_ALL,
      payload: {
        toCompleted,
      },
    });
  },
  changeFilter(filter) {
    TodoDispatcher.dispatch({
      type: ActionTypes.CHANGE_FILTER,
      payload: {
        filter,
      },
    });
  },
};
