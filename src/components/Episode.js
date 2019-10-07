import React,{Component} from 'react';
import {Markup} from 'interweave';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
    const description=episode.description
    return(
      <div className="episode">
        <p>{episode.title}</p>
        <Markup content={description}/>
        <p>Published: {episode.published_date}</p>
        <p>Duration: {episode.audio_length}</p>
      </div>
    )
  }

}
// <p>{episode.description}</p>
