import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoInput from '../containers/TodoInput';
import TodoList from '../containers/TodoList';
import TodoFooter from '../containers/TodoFooter';
import TodoToggleAll from '../containers/TodoToggleAll';

import reducers from '../reducers';
import './Index.scss';

const store = createStore(reducers);

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
