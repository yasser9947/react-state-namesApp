import React, { Component } from 'react'
import './App.css'
import LeftSide from "./Left/LiftSide"
import Data from './Data'

export default class App extends Component {

  state = {
    seta : Data
  }



 

  render() {
    return (
      <div>
        <div className="contenerpord">

     <LeftSide seta = {this.state.seta} />

        </div>
      </div>
    )
  }
}


