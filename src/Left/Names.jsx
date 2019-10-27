import React, { Component } from 'react'

export default class Names extends Component {
    render() {
        return (
            <div>
            <div className="namebox" ><h5 className="coror" > {this.props.name} </h5></div>    
            </div>
        )
    }
}
