import React, { Component } from 'react'
import vegeta from './vegeta.png'
import countHits from './countHits'


class Vegeta extends Component {

  render() {
    const {name, donnerUnCoup, hocState} = this.props;

    return (
      <div className="col">
      <img height= "300px" src={vegeta} alt="vegeta"/ > <br/>
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

export default countHits(Vegeta)
