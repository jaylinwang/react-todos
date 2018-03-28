import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoToggleAll from '../components/TodoToggleAll';
import TodoFilter from '../components/TodoFilter';

import './Index.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.id = 0;
    this.state = {
      todoList: [],
      filterStatus: 'all',
    };
  }

  generateId = () => {
    this.id += 1;
    return this.id;
  }

  onInputEnter = (todo) => {
    let { todoList } = this.state;
    todo.id = this.generateId();
    this.setState({
      todoList: [...todoList, todo],
    });
  }

  onTodoItemChange = (id, todo) => {
    let { todoList } = this.state;
    this.setState({
      todoList: [...todoList].map((item) => {
        if (item.id === id) {
          item = Object.assign(item, todo);
        }
        return item;
      }),
    });
  }

  onItemDelete = (id) => {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.filter(item => item.id !== id),
      };
    });
  }

  onClearAllCompleted = () => {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.filter(item => !item.completed),
      };
    });
  }

  onFilterChange = (value) => {
    this.setState({
      filterStatus: value,
    });
  }

  onToggleAll = (checked) => {
    let { todoList } = this.state;
    if (checked) {
      this.setState({
        todoList: [...todoList].map((item) => {
          item.completed = true;
          return item;
        }),
      });
    } else {
      this.setState({
        todoList: [...todoList].map((item) => {
          item.completed = false;
          return item;
        }),
      });
    }
  };

  getVisibleList() {
    let { todoList, filterStatus } = this.state;
    let visibleTodoList = [];
    switch (filterStatus) {
      case 'completed':
        visibleTodoList = todoList.filter(item => item.completed);
        break;
      case 'active':
        visibleTodoList = todoList.filter(item => !item.completed);
        break;
      default:
        visibleTodoList = todoList;
    }
    return visibleTodoList;
  }

  render() {
    let { todoList, filterStatus } = this.state;

    let completedCount = todoList.filter(item => item.completed).length;
    let visibleTodoList = this.getVisibleList();

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput onEnter={this.onInputEnter} />
        </header>
        <section className="main">
          <TodoToggleAll
            checked={todoList.length > 0 && completedCount === todoList.length}
            onChange={this.onToggleAll}
          />
          <TodoList
            list={visibleTodoList}
            onItemChange={this.onTodoItemChange}
            onItemDelete={this.onItemDelete}
          />
        </section>
        <footer className="footer">
          <div className="todo-count">
            <strong>{completedCount}</strong> 项已完成
          </div>
          <TodoFilter
            value={filterStatus}
            onChange={this.onFilterChange}
          />
          <div className="clear-completed">
            <a onClick={this.onClearAllCompleted}>清空已完成</a>
          </div>
        </footer>
      </section>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
