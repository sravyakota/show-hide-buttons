// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isDisplay1: false, isDisplay2: false}

  button1 = () => {
    this.setState(prevState => ({
      isDisplay1: !prevState.isDisplay1,
    }))
  }

  button2 = () => {
    this.setState(prevState => ({
      isDisplay2: !prevState.isDisplay2,
    }))
  }

  render() {
    const {isDisplay1, isDisplay2} = this.state

    let firstName
    let lastName

    if (isDisplay1 === true) {
      firstName = (
        <div className="names">
          <p>Joe</p>
        </div>
      )
    } else {
      firstName = null
    }

    if (isDisplay2 === true) {
      lastName = (
        <div className="names">
          <p>Jonas</p>
        </div>
      )
    } else {
      lastName = null
    }

    return (
      <div className="bg1">
        <div className="bg">
          <h1 className="heading">Show/Hide</h1>
          <div className="display">
            <div>
              <button type="button" className="button" onClick={this.button1}>
                Show/Hide Firstname
              </button>
              {firstName}
            </div>
            <div>
              <button type="button" className="button" onClick={this.button2}>
                Show/Hide Lastname
              </button>
              {lastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
