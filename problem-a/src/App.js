/* Madison Colvin */
import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */


/* Step one */
export class App extends Component {
  render() {
    let curSenator = this.props.senators;
    return (
      <div className = "container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators = { curSenator } />
      </div>
    );
  }
}

/* Step three + step 6 modifications */
export class SenatorTable extends Component {
  render() {

    let rows = this.props.senators;
    let maps = rows.map((senator) => 
      <SenatorRow key = { senator.name } senator = { senator } />)

    return (
      <table className = "table table-bordered">
        <TableHeader cols = { ['Name', 'State', 'Phone', 'Twitter'] } />
        <tbody>
          { maps } 
        </tbody>
      </table>
    );
  }
}

/* Step four */
export class TableHeader extends Component {
  render() {

    let column = this.props.cols;
    let maps = column.map((colName) => 
      <th key = { colName }>{ colName }</th>)

    return (
      <thead>
        <tr>
          { maps }
        </tr>
      </thead>
    );
  }
}

/* Step five */
export class SenatorRow extends Component {
  render() {

    /* Each data feild we are referencing uses: this.props.senator to identify each senator */
    return (
      <tr>
        <td>{this.props.senator.name}</td>
        <td>{this.props.senator.party.substring(0, 1) + " - " + this.props.senator.state}</td>
        <td> <a href={ "tel:" + this.props.senator.phone }>{this.props.senator.phone}</a> </td>
        <td> <a href={ "https://twitter.com/" + this.props.senator.twitter }>{"@" + this.props.senator.twitter}</a> </td>
      </tr>
    );
  }
}
