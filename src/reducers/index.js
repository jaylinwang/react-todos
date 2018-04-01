import { combineReducers } from 'redux';

import todoList from './todoList';
import filterStatus from './filterStatus';

export default combineReducers({
  todoList,
  filterStatus,
});
