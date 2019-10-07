import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PodcastEps from './PodcastEps'

class Podcast extends Component{

  render(){
    const {podcast} = this.props
    return(
      <Router>
        <div className='podcast'>
          <img src={podcast.image} />
          <div className='podcast-details'>
            <Link key={podcast.podcast_id} to={`/podcasts/${podcast.podcast_id}`}>{podcast.title}</Link>
            <br></br>
            <span>Total Episodes: {podcast.total_episodes}</span>
          </div>
          <br></br>
          <Route path={'/podcasts/:podcastid'} component={PodcastEps} />
        </div>
      </Router>
    )
  }

}



export default Podcast;
