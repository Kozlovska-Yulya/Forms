import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div>
      <p>Найдено пользователей: {users.length}</p>
      <ul className="users">
        {users.map((user, index) => (
          <li key={index} className="user">
            <span className="user__name">{user.name}</span>
            <span className="user__age">{user.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
