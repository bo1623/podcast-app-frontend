import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';

class EpisodesContainer extends Component {

  render(){
    return(
      <h1>Podcast episodes</h1>
    )
  }

}

const mapStateToProps = state => {
  return {
    episodes: state.episodes
  }
}


export default EpisodesContainer
