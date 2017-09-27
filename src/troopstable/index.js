import React, { Component } from 'react';
import troops from './../troops.json'

const isFarmAttackedWith = (troopName) => (item) => item.troops.type === troopName;

export default class TroopsTable extends Component {
  constructor(props) {
    super(props);

    this.necessaryTroops = this.necessaryTroops.bind(this)
  }
  
  necessaryTroops(troop, farms) {
    const { necessaryTroopsByTime } = this.props;

    const farmsAttacked = farms.filter(isFarmAttackedWith(troop.name))
    return farmsAttacked.reduce(function (accum, current) { return accum + necessaryTroopsByTime(current)}, 0)
  }

  render() {
    const { villageTroops, farms } = this.props;
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
