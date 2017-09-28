import React, { Component } from 'react';

const compareTroops = (a, b) => {
  let compare = a.troops.type.localeCompare(b.troops.type)
  if(compare === 0)
    compare = a.troops.amount - b.troops.amount
  return compare
}

export default class FarmTable extends Component {
  constructor(props) {
    super(props);

    this.generateTime = this.generateTime.bind(this)
  }
  
  generateTime(farm) {
    if(farm.time === 0) return ""
    const { maxTimeDerired } = this.props;

    let times = [farm.time]
    let currentTime = farm.time
    while(currentTime < maxTimeDerired) {
      currentTime += farm.time_to_attack + Math.floor((Math.random() * 5) + 1)
      times.push(currentTime)
    }

    return times.join(",")
  }

  render() {
    const { list, necessaryTroopsByTime } = this.props;
    return (
      <div className="table">
        <div key="0" className="table-row">
          <span style={{ width: '15%' }}>
            Nome
          </span>
          <span style={{ width: '5%' }}>
            Habitantes
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
          <span style={{ width: '40%' }}>
            Tempo para ataques
          </span>
        </div>
        { list.sort(compareTroops).map(item =>
          <div key={item.id} className="table-row">
            <span style={{ width: '15%' }}>
              {item.name}
            </span>
            <span style={{ width: '5%' }}>
              {item.villagers}
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
            <span style={{ width: '40%' }}>
              {this.generateTime(item)}
            </span>
          </div>
        )}
      </div>
    );
  }
}