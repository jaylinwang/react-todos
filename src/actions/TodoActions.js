import ActionTypes from '../constants/ActionTypes';

export default {
  addTodo(title) {
    return {
      type: ActionTypes.ADD_TODO,
      payload: {
        title,
      },
    };
  },
  deleteTodo(id) {
    return {
      type: ActionTypes.DELETE_TODO,
      payload: {
        id,
      },
    };
  },
  updateTodo(id, todo) {
    return {
      type: ActionTypes.UPDATE_TODO,
      payload: {
        id,
        todo,
      },
    };
  },
  clearCompletedTodo() {
    return {
      type: ActionTypes.CLEAT_COMPLETED,
    };
  },
  toggleAll(toCompleted) {
    return {
      type: ActionTypes.TOGLLE_ALL,
      payload: {
        toCompleted,
      },
    };
  },
  changeFilter(filter) {
    return {
      type: ActionTypes.CHANGE_FILTER,
      payload: {
        filter,
      },
    };
  },
};
