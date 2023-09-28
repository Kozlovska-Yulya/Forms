import React from 'react';
import Filter from './Filter';

class UserList extends React.Component {
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

    // Применяем фильтрацию только если filterText не пустой
    const filteredUsers = filterText
      ? users.filter((user) =>
          user.name.toLowerCase().includes(filterText.toLowerCase())
        )
      : users;

    return (
      <div>
        <Filter filterText={filterText} onChange={this.handleFilterChange} />
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

export default UserList;
