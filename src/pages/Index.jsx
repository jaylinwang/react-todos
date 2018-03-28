import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoToggleAll from '../components/TodoToggleAll';
import TodoFilter from '../components/TodoFilter';

import './Index.scss';

class Index extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <section className="main">
          <TodoToggleAll />
          <TodoList />
        </section>
        <footer className="footer">
          <div className="todo-count">
            <strong>2</strong> 项已完成
          </div>
          <TodoFilter />
          <div className="clear-completed">
            <a>清空已完成</a>
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
