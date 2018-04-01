import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from '../containers/TodoInput';
import TodoList from '../containers/TodoList';
import TodoFooter from '../containers/TodoFooter';
import TodoToggleAll from '../containers/TodoToggleAll';

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
        <TodoFooter />
      </section>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
