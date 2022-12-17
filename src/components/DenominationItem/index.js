import './index.css'

import {Component} from 'react'

export default class DenominationItem extends Component {
  state = {id: '', balance: ''}

  reduce = () => {
    const {balance, id} = this.state
    balance(id)
  }

  setter = (id, balance) => {
    this.state = {id, balance}
  }

  render() {
    const {value, id, balance} = this.props
    this.setter(id, balance)
    return (
      <li className="item">
        <button className="button" onClick={this.reduce} type="button">
          {value}
        </button>
      </li>
    )
  }
}
