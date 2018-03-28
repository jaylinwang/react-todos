import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoToggleAll.scss';

export default class TodoToggleAll extends Component {
  static propTypes = {
    defaultValue: PropTypes.bool,
    value: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: false,
    defaultValue: false,
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  onChange = (event) => {
    let targetValue = event.target.value;
    this.setState({
      value: targetValue,
    });
    this.props.onChange(targetValue);
  }

  render() {
    let { value } = this.state;

    return (
      <input
        className="todo-toggle-all"
        type="checkbox"
        checked={value}
        onChange={this.onChange}
      />
    );
  }
}
