import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };
  }

  handleFilterChange = (event) => {
    this.setState({
      filterText: event.target.value.toLowerCase(),
    });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    // Фильтруем пользователей на основе введенного текст

    const usersToDisplay = users.filter(({ name }) =>
      name.toLowerCase().includes(filterText)
    );
    return (
      <div>
        <Filter
          filterText={filterText}
          count={usersToDisplay.length}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
          {usersToDisplay.map((user, index) => (
            <User key={index} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
