import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import troops from './troops.json'

import alexandriaTroops from './alexandria/troops.json'
import alexandriaFarms from './alexandria/farms.json'

import troiaTroops from './troia/troops.json'
import troiaFarms from './troia/farms.json'

const maxTimeDerired = 720

const necessaryTroopsByTime = (farm) =>{
  const necessaryTime = farm.time * 2
  const times = Math.ceil(necessaryTime / farm.time_to_attack)
  return farm.troops.amount * times
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      troops,
    };
  }

  render() {
    return (
      <div className="page">
        <h1 className="interactions">Alexandria</h1>
        <h2 className="interactions">Farms</h2>
        <FarmTable
          list={alexandriaFarms}
          onDismiss={ function() {} }
        />
        <h2 className="interactions">Tropas</h2>
        <TroopsTable
          troops={troops}
          villageTroops={alexandriaTroops}
          farms={alexandriaFarms}
        />
        <h1 className="interactions">Troia</h1>
        <h2 className="interactions">Farms</h2>
        <FarmTable
          list={troiaFarms}
          onDismiss={ function() {} }
        />
        <h2 className="interactions">Tropas</h2>
        <TroopsTable
          troops={troops}
          villageTroops={troiaTroops}
          farms={troiaFarms}
        />
      </div>
    );
  }
}

class FarmTable extends Component {
  constructor(props) {
    super(props);

    this.generateTime = this.generateTime.bind(this)
  }
  
  generateTime(farm) {
      let times = [farm.time]
      let currentTime = farm.time
      while(currentTime < maxTimeDerired) {
        currentTime += farm.time_to_attack + Math.floor((Math.random() * 5) + 1)
        times.push(currentTime)
      }

      return times.join(",")
  }

  render() {
    const { list, onDismiss } = this.props;
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
          <span style={{ width: '45%' }}>
            Tempo para ataques
          </span>
          {/* <span style={{ width: '10%' }}>
            Ações
          </span> */}
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
              {item.troops.amount} ({necessaryTroopsByTime(item)}) {item.troops.type}
            </span>
            <span style={{ width: '45%' }}>
              {this.generateTime(item)}
            </span>
            {/* <span style={{ width: '10%' }}>
              <button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </button>
            </span> */}
          </div>
        )}
      </div>
    );
  }
}

const isFarmAttackedWith = (troopName) => (item) => item.troops.type === troopName;

class TroopsTable extends Component {
  constructor(props) {
    super(props);

    this.necessaryTroops = this.necessaryTroops.bind(this)
  }
  
  necessaryTroops(troop, farms) {
      const farmsAttacked = farms.filter(isFarmAttackedWith(troop.name))
      return farmsAttacked.reduce(function (accum, current) { return accum + necessaryTroopsByTime(current)}, 0)
  }

  render() {
    const { troops, villageTroops, farms } = this.props;
    return (
      <div className="table" style={{ width: '50%', margin: 'auto' }}>
        <div key="0" className="table-row">
          <span style={{ width: '33%' }}>
            Nome
          </span>
          <span style={{ width: '33%' }}>
            Atual
          </span>
          <span style={{ width: '34%' }}>
            Necessário
          </span>
        </div>
        { troops.map(item =>
          <div key={item.id} className="table-row">
            <span style={{ width: '33%' }}>
              {item.name}
            </span>
            <span style={{ width: '33%' }}>
              {villageTroops[item.name]}
            </span>
            <span style={{ width: '34%' }}>
              {this.necessaryTroops(item, farms)}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
