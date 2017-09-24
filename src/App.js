import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const troops = [
  "Milícia Escrava",
  "Guardião das Cinzas",
  "Khopesh",
  "Anhur",
  "Resheph"
]

const farms = [
  {
    id: 1,
    name: "Aldeia do Bradsan",
    localization: "-43|24",
    distance: 2,
    time: 17,
    troops: {
      type: "Guardião das Cinzas",
      amount: 5
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      farms,
      troops,
    };
  }

  render() {
    return (
      <div>
        <FarmTable
          list={farms}
          onDismiss={ function() {} }
        />
      </div>
    );
  }
}

class FarmTable extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
      <div className="table">
        { list.map(item =>
          <div key={item.id} className="table-row">
            <span style={{ width: '40%' }}>
              {item.name}
            </span>
            <span style={{ width: '10%' }}>
              {item.localization}
            </span>
            <span style={{ width: '10%' }}>
              {item.distance}
            </span>
            <span style={{ width: '10%' }}>
              {item.time}
            </span>
            <span style={{ width: '20%' }}>
              {item.troops.amount} {item.troops.type}
            </span>
            <span style={{ width: '10%' }}>
              <button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
