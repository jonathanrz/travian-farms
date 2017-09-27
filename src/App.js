import React, { Component } from 'react';
import FarmTable from './farmtable/';
import TroopsTable from './troopstable/';
import './App.css';

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
  render() {
    return (
      <div className="page">
        <h1 className="interactions">Alexandria</h1>
        <h2 className="interactions">Farms</h2>
        <FarmTable
          list={alexandriaFarms}
          maxTimeDerired={maxTimeDerired}
          necessaryTroopsByTime={necessaryTroopsByTime}
        />
        <h2 className="interactions">Tropas</h2>
        <TroopsTable
          villageTroops={alexandriaTroops}
          farms={alexandriaFarms}
          necessaryTroopsByTime={necessaryTroopsByTime}
        />
        <h1 className="interactions">Troia</h1>
        <h2 className="interactions">Farms</h2>
        <FarmTable
          list={troiaFarms}
          maxTimeDerired={maxTimeDerired}
          necessaryTroopsByTime={necessaryTroopsByTime}
        />
        <h2 className="interactions">Tropas</h2>
        <TroopsTable
          villageTroops={troiaTroops}
          farms={troiaFarms}
          necessaryTroopsByTime={necessaryTroopsByTime}
        />
      </div>
    );
  }
}

export default App;
