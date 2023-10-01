import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      filteredUsers: this.props.users,
    };
  }

  handleFilterChange = (event) => {
    const newText = event.target.value;
    const filteredUsers = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(newText.toLowerCase())
    );

    this.setState({
      filterText: newText,
      filteredUsers: filteredUsers,
    });
  };
  render() {
    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={this.state.filteredUsers.length}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
          {this.state.filteredUsers.map((user, index) => (
            <User key={index} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
