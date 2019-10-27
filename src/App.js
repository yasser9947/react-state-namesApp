import React, { Component } from 'react'
import './App.css'
import LeftSide from "./Left/LiftSide"
import Data from './Data'
import RightSide from './Right /RightSide'
export default class App extends Component {

  state = {
    seta: Data,
    EventSelect: null

  }


  handelEvenetSelect = (ele) => {
this.setState({
  EventSelect:ele
})
  }


  render() {
    return (
      <div>
        <div className="contenerpord">

          <LeftSide seta={this.state.seta} handelEvenetSelect = {this.handelEvenetSelect}/>
          {this.state.EventSelect !== null && <RightSide EventSelect = {this.state.EventSelect} />}
        </div>
      </div>
    )
  }
}


