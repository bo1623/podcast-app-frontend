import React,{Component} from 'react';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
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
