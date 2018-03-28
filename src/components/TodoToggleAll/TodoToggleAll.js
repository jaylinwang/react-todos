import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoToggleAll.scss';

export default class TodoToggleAll extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    onChange: () => {},
  }

  onChange = (event) => {
    let targetValue = event.target.checked;
    this.props.onChange(targetValue);
  }

  render() {
    let { checked } = this.props;
    return (
      <input
        className="todo-toggle-all"
        type="checkbox"
        checked={checked}
        onChange={this.onChange}
      />
    );
  }
}
