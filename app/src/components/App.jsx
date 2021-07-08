import React from 'react'
import axios from 'axios'

const config = require('../../config.json')

const APIRoot = config.SERVER_BASE_URL[process.env.NODE_ENV || "development"];

class App extends React.Component {

  componentDidMount() {
    this.getPatients()
  }

  async getPatients() {
    const promise = await axios.get(`${APIRoot}/patients`)
    const status = promise.status
    if (status == 200) {
      const patients = promise
    } else {
      console.log('error')
    }
  }

  render() {
    return (
      <div>hi
      </div>
    )
  }
}

export default App
