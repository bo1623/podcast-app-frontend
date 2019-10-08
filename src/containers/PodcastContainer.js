import React,{Component} from 'react';
import EpisodesContainer from './EpisodesContainer'
import PodcastShow from '../components/PodcastShow'
import {connect} from 'react-redux'
import fetchPodcastShow from '../actions/fetchPodcastShow'

class PodcastContainer extends Component{

  componentDidMount(){
    this.props.showPodcast(this.props.match.params.podcastid)
  }

  render(){
    console.log(this.props.match.params.podcastid)
    return(
      <div>
        <h1>Inside podcast container</h1>
        <PodcastShow />
        <EpisodesContainer podcastId={this.props.match.params.podcastid}/>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  showPodcast: id => dispatch(fetchPodcastShow(id))
})

export default connect(null, mapDispatchToProps)(PodcastContainer)
