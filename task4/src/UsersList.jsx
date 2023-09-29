import React, { Component } from 'react';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '', // Исходное значение фильтра
    };
  }

  handleFilterChange = (e) => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    // Фильтрация пользователей на основе введенного текста
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <div className="filter">
          <input
            type="text"
            className="filter__input"
            placeholder="Фильтр по имени"
            value={filterText}
            onChange={this.handleFilterChange}
          />
        </div>
        <ul className="users">
          {filteredUsers.map((user, index) => (
            <li className="user" key={index}>
              <span className="user__name">{user.name}</span>
              <span className="user__age">{user.age}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
