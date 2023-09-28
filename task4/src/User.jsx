import React, { Component } from 'react';

class User extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <div className="filter">
          <span className="filter__count">5</span>
          <input type="text" className="filter__input" />
        </div>
        <ul className="users">
          <li className="user">
            <span className="user__name">{name}</span>
            <span className="user__age">{age}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default User;
