import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Podcast extends Component{

  render(){
    const {podcast} = this.props

    return(
      <div className='podcast'>
        <img src={podcast.image} />
        <div className='podcast-details'>
          <Link key={podcast.podcast_id} to={`/podcasts/${podcast.podcast_id}`}>{podcast.title}</Link>
          <br></br>
          <span>Total Episodes: {podcast.total_episodes}</span>
        </div>
        <br></br>
      </div>
    )
  }

}



export default Podcast;
