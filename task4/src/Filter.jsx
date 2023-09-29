import React from 'react';

class Filter extends React.Component {
  handleInputChange = (e) => {
    const { onChange } = this.props;
    const newText = e.target.value;
    onChange(newText);
  };

  render() {
    const { filterText, count } = this.props;

    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          type="text"
          className="filter__input"
          value={filterText}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Filter;
