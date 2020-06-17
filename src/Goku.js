import React, { Component } from 'react'
import goku from './goku.png'
import countHits from './countHits'

class Goku extends Component {

  render() {
    const {name, donnerUnCoup, hocState} = this.props;

    return (
      <div className="col">
      <img height= "300px" src={goku} alt="goku"/ > <br/>
      <button className='btn btn-success m-3' onClick={donnerUnCoup}> {name} Frappe! </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> Coup </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hocState.hits}        </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
export default countHits(Goku);
