import React, { Component } from 'react';
import Filter from './Filter';

class App extends Component {
  state = {
    filterValue: '', // Исходное значение фильтра
  };

  // Обработчик изменения фильтра
  handleFilterChange = (newValue) => {
    this.setState({ filterValue: newValue });
  };

  render() {
    return (
      <div className="App">
        <Filter
          count={10} // Замените на ваше количество найденных пользователей
          initialValue={this.state.filterValue}
          onChange={this.handleFilterChange}
        />
        <p>{this.state.filterValue}</p>
        {/* Другие компоненты и отображение пользователей */}
      </div>
    );
  }
}

export default App;
