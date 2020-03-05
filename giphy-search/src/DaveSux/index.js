import React, { Component } from 'react'
import Search from '../searchTask'

class DaveSux extends Component {
    constructor() {
        super()
        this.state = {
            giphy: []
        }
    }


gitGiffys = async (queryString) => {
    const giffys = await fetch()
    const parsedGiphy = await parsedGiphy.jason()
    this.setState({
        giphy: parsedGiphy.data
    })
    console.log('queryString', queryString)
}
render() {
    return (
       <body><Search /></body> 
    )
}
}

export default DaveSux;