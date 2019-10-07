import React,{Component} from 'react';
import {Markup} from 'interweave';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
    const description=episode.description
    return(
      <div className="episode">
        <p>{episode.title}</p>
        <p>{episode.description}</p>
        <p>Published: {episode.published_date}</p>
        <p>Duration: {episode.audio_length}</p>
      </div>
    )
  }

}
// <Markup content={description}/>
