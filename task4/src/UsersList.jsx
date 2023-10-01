import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      users: this.props.users,
    };
  }

  handleFilterChange = (event) => {
    this.setState({
      filterText: event.target.value,
      users: this.props.users.filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };
  render() {
    return (
      <div>
        <Filter
          filterText={this.filterText}
          count={this.state.users.length}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
          {this.state.users.map((user, index) => (
            <User key={index} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
