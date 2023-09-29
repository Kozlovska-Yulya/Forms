import React from 'react';
import UsersList from './UsersList';

const App = () => {
  const users = [
    { name: 'Tad', age: 18 },
    { name: 'Anna', age: 45 },
  ];

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default App;
