import React,{Component} from 'react';
import {Markup} from 'interweave';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
    const description=episode.description
    const url_split=episode.audio_url.split('/e/')
    const new_url=url_split[0]+'/embedded/e/'+url_split[1]
    return(
      <div className="episode">
        <div>{episode.title} <button>Add to Playlist</button> </div>
        <Markup content={description}/>
        <p>Published: {episode.published_date}</p>
        <p>Duration: {episode.audio_length}</p>
        <iframe src={new_url} height="300px" width="100%"></iframe>
      </div>
    )
  }

}
// <p>{episode.description}</p>
