import React from 'react';

class Filter extends React.Component {
  render() {
    const { filterText, onChange } = this.props;

    return (
      <div>
        <input type="text" value={filterText} onChange={onChange} />
      </div>
    );
  }
}

export default Filter;
