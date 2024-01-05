// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
const heads = 0
const tails = 1

class CoinToss extends Component {
  state = {
    tossResultImage: headsUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === heads) {
      tossImage = headsUrl
      latestHeadsCount += 1
    } else if (toss === tails) {
      tossImage = tailsUrl
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="app-card">
          <h1 className="main-heading">Coin Toss Game </h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossResultImage} className="toss-image" alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-description">Total:{totalCount}</p>
            <p className="count-description">Heads:{headsCount}</p>
            <p className="count-description">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
