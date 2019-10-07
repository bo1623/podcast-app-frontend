import React,{Component} from 'react';
import {Markup} from 'interweave';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
    const description=episode.description
    return(
      <div className="episode">
        <div>{episode.title} <button>Add to Playlist</button> </div>
        <Markup content={description}/>
        <p>Published: {episode.published_date}</p>
        <p>Duration: {episode.audio_length}</p>
      </div>
    )
  }

}
// <p>{episode.description}</p>
