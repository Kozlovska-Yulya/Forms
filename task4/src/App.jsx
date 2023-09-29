import React from 'react';
import User from './User';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul className="users">
          <User name="Tad" age="18" />
          <User name="Anna" age="45" />
        </ul>
      </div>
    );
  }
}

export default App;
