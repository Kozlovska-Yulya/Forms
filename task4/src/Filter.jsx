import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.initialValue || '',
    };
  }

  handleInputChange = (e) => {
    const newValue = e.target.value;
    this.setState({ inputValue: newValue });

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Filter;
