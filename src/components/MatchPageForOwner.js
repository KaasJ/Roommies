import * as React from 'react'
import { connect } from 'react-redux';
import { lookingRoom } from './dummydata';


class MatchPageForOwner extends React.Component {

  findMatch = (owner, tenants) => tenants.filter(tenant => {
    return Object.keys(owner).every(k => {
      if (k === 'description' || k === 'image') {
        return true;
      }
      return owner[k].toLowerCase() === tenant[k].toLowerCase()
    })
  })

  componentDidMount() {
    const owner = this.props.owners.roomOwner[0] || {}
    const matches = this.findMatch(owner, lookingRoom);
  

    this.setState({
      owner: owner,
      matches: matches,
      index: 0,
    })
  }

  rotate = () => {
    this.setState({ index: (this.state.index + 1) % this.state.matches.length })
  }

  rotateback = () => {
    this.setState({ index: (this.state.index - 1) % this.state.matches.length })
  }

  render() {
    let matches = 0;
    let mate = {};

    if (this.state) {
      matches = this.state.matches;
      mate = matches[Math.abs(this.state.index)] || {};
    }

    return (
      <div>
        <h1>Found {matches.length} matches</h1>
        <ul>
          <li>{mate.description}</li>
          <li><img src={mate.image} alt='owner'/></li>
          {/* {matches.map((m, i) => <li key={i}>{m.description}</li>)} */}
        </ul>
        <button onClick={this.rotateback}>Previous</button>
        <button onClick={this.rotate}>Next</button>
        

      </div>
    )
  }
}





const mapStateToProps = (state) => {

  return {
    owners: state
  }
}

export default connect(mapStateToProps)(MatchPageForOwner)