import React, { Component } from 'react'
import goku from './goku.png'
import countHits from './countHits'

class Goku extends Component {

  render() {
    const {name, donnerUnCoup, hocState, life} = this.props;
    const lifeValue = life>0 ? (  <td>{life}%</td>) : (  <td><span className="badge-danger">Mort</span></td>);
    const button = life>0 ? (<button className='btn btn-success m-3' onClick={donnerUnCoup}> {name} Frappe! </button>) :
     (<button className='btn btn-danger m-3 disabled'> {name} est mort! </button>)

    return (
      <div className="col">
      <img height= "300px" src={goku} alt="goku"/ > <br/>
      {button}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> Coup </th>
            <th scope="col"> Vie </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hocState.hits}</td>
            {lifeValue}
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
export default countHits(Goku, 20);
