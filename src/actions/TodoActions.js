import ActionTypes from '../constants/ActionTypes';
import TodoDispatcher from '../dispatchers/TodoDispatcher';

export default {
  addTodo(title) {
    TodoDispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      title,
    });
  },
};
