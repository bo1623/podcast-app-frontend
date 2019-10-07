import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import Episode from '../components/Episode'

class EpisodesContainer extends Component {

  render(){
    console.log(this.props)
    let episodes
    if(!!this.props.episodes.episodes){
      episodes=this.props.episodes.episodes.map(episode=><Episode episode={episode}/>)
    }
    return(
      <div>
        <h1>Podcast episodes</h1>
        {episodes}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    episodes: state.episodes
  }
}


export default connect(mapStateToProps)(EpisodesContainer)
