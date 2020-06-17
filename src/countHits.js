import React, {Component} from 'react'

const countHits = (WrappedComponent) => {

    class CountHits extends Component {
      state = {
        hits : 0
      }

      donnerUnCoup = () => {
        this.setState( prevState => {
          return {hits : prevState.hits + 1}
        })
      }
      render(){
        return <WrappedComponent donnerUnCoup={this.donnerUnCoup} hocState={this.state} {...this.props}/>
      }
    }
    return CountHits

}



export default countHits
