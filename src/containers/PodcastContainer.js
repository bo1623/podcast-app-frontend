import React,{Component} from 'react';
import EpisodesContainer from './EpisodesContainer'
import PodcastShow from '../components/PodcastShow'

export default class PodcastContainer extends Component{

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
