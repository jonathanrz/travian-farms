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
    time_to_attack: 45,
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

    this.generateTime = this.generateTime.bind(this)
  }

  generateTime(farm) {
      let times = [farm.time]
      let currentTime = farm.time
      while(currentTime < 720) {
        currentTime += farm.time_to_attack + Math.floor((Math.random() * 5) + 1)
        times.push(currentTime)
      }

      return times.join(",")
  }

  render() {
    return (
      <div>
        <FarmTable
          list={farms}
          onDismiss={ function() {} }
          generateTime={ this.generateTime }
        />
      </div>
    );
  }
}

class FarmTable extends Component {
  render() {
    const { list, onDismiss, generateTime } = this.props;
    return (
      <div className="table">
        <div key="0" className="table-row">
          <span style={{ width: '15%' }}>
            Nome
          </span>
          <span style={{ width: '8%' }}>
            Localização
          </span>
          <span style={{ width: '7%' }}>
            Distância
          </span>
          <span style={{ width: '10%' }}>
            Tempo necessário
          </span>
          <span style={{ width: '15%' }}>
            Tropa
          </span>
          <span style={{ width: '35%' }}>
            Tempo para ataques
          </span>
          <span style={{ width: '10%' }}>
            Ações
          </span>
        </div>
        { list.map(item =>
          <div key={item.id} className="table-row">
            <span style={{ width: '15%' }}>
              {item.name}
            </span>
            <span style={{ width: '8%' }}>
              {item.localization}
            </span>
            <span style={{ width: '7%' }}>
              {item.distance}
            </span>
            <span style={{ width: '10%' }}>
              {item.time} - {item.time_to_attack}
            </span>
            <span style={{ width: '15%' }}>
              {item.troops.amount} {item.troops.type}
            </span>
            <span style={{ width: '35%' }}>
              {generateTime(item)}
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
