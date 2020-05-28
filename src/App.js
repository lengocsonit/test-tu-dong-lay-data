import React, { Component } from 'react'
import Home from './Home'
import Admin from './Admin'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }
  }

  goToAdminPage = () => {
    this.setState({
      currentPage: 1,
      startTrain: true
    })
  }

  backToHomePage = () => {
    this.setState({
      currentPage: 0
    })
  }

  callBack = () => {
    this.setState({
      startTrain: false
    })
    console.log("start train: ", this.state.startTrain);
  }

  render() {
    if (this.state.currentPage === 1) {
      return (
        <Admin startTrain={this.state.startTrain} back={this.backToHomePage} callBack={this.callBack}/>
      )
    }

    return (
      <Home onClick={this.goToAdminPage}/>
    )
  }
}
