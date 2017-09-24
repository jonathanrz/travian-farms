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

const alexandriaFarms = [
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
  },
  {
    id: 2,
    name: "Copacabana",
    localization: "-42|25",
    distance: 1.4,
    time: 15,
    time_to_attack: 45,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 3,
    name: "Scuffio",
    localization: "-39|28",
    distance: 4.5,
    time: 39,
    time_to_attack: 60,
    troops: {
      type: "Guardião das Cinzas",
      amount: 5
    }
  },
  {
    id: 4,
    name: "Sparta",
    localization: "-44|19",
    distance: 5.8,
    time: 59,
    time_to_attack: 90,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 5,
    name: "Pimpolho",
    localization: "-40|17",
    distance: 7.1,
    time: 71,
    time_to_attack: 90,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 6,
    name: "Gate",
    localization: "-50|29",
    distance: 9.8,
    time: 109,
    time_to_attack: 120,
    troops: {
      type: "Guardião das Cinzas",
      amount: 5
    }
  },
  {
    id: 7,
    name: "Pequena",
    localization: "-53|28",
    distance: 12.6,
    time: 50,
    time_to_attack: 90,
    troops: {
      type: "Anhur",
      amount: 10
    }
  },
  {
    id: 8,
    name: "Cearense",
    localization: "-39|18",
    distance: 6.3,
    time: 64,
    time_to_attack: 90,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 9,
    name: "Prepara",
    localization: "-32|18",
    distance: 10.8,
    time: 43,
    time_to_attack: 75,
    troops: {
      type: "Anhur",
      amount: 4
    }
  },
  {
    id: 10,
    name: "Winterfell",
    localization: "-28|31",
    distance: 14.8,
    time: 60,
    time_to_attack: 90,
    troops: {
      type: "Anhur",
      amount: 4
    }
  },
  {
    id: 11,
    name: "Gremio",
    localization: "-45|31",
    distance: 8.1,
    time: 81,
    time_to_attack: 120,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 12,
    name: "Jogo Pelado",
    localization: "-50|31",
    distance: 11.4,
    time: 98,
    time_to_attack: 120,
    troops: {
      type: "Khopesh",
      amount: 10
    }
  },
  {
    id: 13,
    name: "01",
    localization: "-21|31",
    distance: 21.2,
    time: 85,
    time_to_attack: 210,
    troops: {
      type: "Anhur",
      amount: 20
    }
  },
  {
    id: 14,
    name: "Oásis Ocupado",
    localization: "-43|26",
    distance: 2,
    time: 17,
    time_to_attack: 40,
    troops: {
      type: "Guardião das Cinzas",
      amount: 50
    }
  },
  {
    id: 15,
    name: "Merda",
    localization: "-38|23",
    distance: 3.2,
    time: 32,
    time_to_attack: 75,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 16,
    name: "Natares",
    localization: "-29|20",
    distance: 12.6,
    time: 51,
    time_to_attack: 120,
    troops: {
      type: "Anhur",
      amount: 4
    }
  },
  {
    id: 17,
    name: "Fênix",
    localization: "-25|33",
    distance: 18.4,
    time: 184,
    time_to_attack: 420,
    troops: {
      type: "Guardião das Cinzas",
      amount: 100
    }
  },
  {
    id: 18,
    name: "Anápolis",
    localization: "-26|31",
    distance: 16.6,
    time: 166,
    time_to_attack: 330,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 19,
    name: "Extermínio",
    localization: "-22|36",
    distance: 22.5,
    time: 129,
    time_to_attack: 250,
    troops: {
      type: "Anhur",
      amount: 6
    }
  },
  {
    id: 20,
    name: "01",
    localization: "-21|31",
    distance: 18,
    time: 110,
    time_to_attack: 120,
    troops: {
      type: "Resheph",
      amount: 100
    }
  }
]

const troiaFarms = [
  {
    id: 101,
    name: "Natares",
    localization: "-58|37",
    distance: 5.8,
    time: 59,
    time_to_attack: 120,
    troops: {
      type: "Guardião das Cinzas",
      amount: 5
    }
  },
  {
    id: 102,
    name: "Natares",
    localization: "-48|33",
    distance: 5.1,
    time: 50,
    time_to_attack: 120,
    troops: {
      type: "Guardião das Cinzas",
      amount: 5
    }
  },
  {
    id: 103,
    name: "Ato I",
    localization: "-56|37",
    distance: 4.2,
    time: 43,
    time_to_attack: 90,
    troops: {
      type: "Guardião das Cinzas",
      amount: 10
    }
  },
  {
    id: 104,
    name: "Natares",
    localization: "-60|28",
    distance: 9.2,
    time: 80,
    time_to_attack: 180,
    troops: {
      type: "Milícia Escrava",
      amount: 8
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <h1>Alexandria</h1>
        <FarmTable
          list={alexandriaFarms}
          onDismiss={ function() {} }
          generateTime={ this.generateTime }
        />
        <h1>Troia</h1>
        <FarmTable
          list={troiaFarms}
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
