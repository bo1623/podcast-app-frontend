import React,{Component} from 'react';
import EpisodesContainer from './EpisodesContainer'

export default class PodcastContainer extends Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Inside podcast container</h1>
        <EpisodesContainer />
      </div>
    )
  }

}
