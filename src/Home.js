import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>Go to Admin Page</button>
            </div>
        )
    }
}
