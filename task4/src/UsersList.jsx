import React, { Component } from 'react';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };
  }

  handleFilterChange = (filterText) => {
    this.setState({ filterText });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <Filter
          filterText={filterText}
          count={filteredUsers.length}
          onChange={this.handleFilterChange}
        />
        <div className="users">
          {filteredUsers.map((user, index) => (
            <div className="user" key={index}>
              <span className="user__name">{user.name}</span>
              <span className="user__age">{user.age}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersList;
