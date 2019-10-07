import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PodcastEps from './PodcastEps'
import {connect} from 'react-redux'
import fetchPodcast from '../actions/fetchPodcast'

class Podcast extends Component{

  render(){
    const {podcast} = this.props

    return(
      <Router>
        <div className='podcast'>
          <img src={podcast.image} />
          <div className='podcast-details'>
            <Link
              key={podcast.podcast_id}
              to={`/podcasts/${podcast.podcast_id}`}
              onClick={()=>this.props.addEpisodes(podcast.podcast_id)}
            >{podcast.title}</Link>
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

const mapDispatchToProps = dispatch => ({
  addEpisodes: id => dispatch(fetchPodcast(id))
})

export default connect(null,mapDispatchToProps)(Podcast);
