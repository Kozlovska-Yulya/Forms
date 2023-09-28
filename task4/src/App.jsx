import React from 'react';
import User from './User';

class App extends React.Component {
  render() {
    return (
      <div>
        <User name="Tad" age={18} />
        <User name="Anna" age={45} />
      </div>
    );
  }
}

export default App;
