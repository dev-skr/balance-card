import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

export default class CashWithdrawal extends Component {
  state = {value: 2000, denominationsList: ''}

  setter = list => {
    this.state.denominationsList = list
  }

  balance = id => {
    const {denominationsList} = this.state
    const arr = denominationsList.filter(each => each.id === id)
    const val = arr[0].value
    this.setState(prevState => ({value: prevState.value - val}))
  }

  render() {
    const {denominationsList} = this.props
    this.setter(denominationsList)
    const {value} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="profile">
            <div className="profile-struc">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount">
              <p className="balance">{value}</p>
              <p className="tag">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="denom-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations">
            {denominationsList.map(each => (
              <DenominationItem
                value={each.value}
                id={each.id}
                balance={this.balance}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
