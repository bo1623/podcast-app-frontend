import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import EpisodesContainer from '../containers/EpisodesContainer'
import {connect} from 'react-redux'
import fetchPodcast from '../actions/fetchPodcast'

class Podcast extends Component{

  handleOnClick = () => {
    debugger;
    console.log('click is working')
    this.props.addEpisodes(this.props.podcast.podcast_id)
  }

  render(){
    const {podcast} = this.props
    const {match} = this.props


    return(
      <div className='podcast'>
        <img src={podcast.image} />
        <div className='podcast-details' onClick={()=>this.props.addEpisodes(podcast.podcast_id)}>
          <Link
            key={podcast.podcast_id}
            to={`/podcasts/${podcast.podcast_id}`}
            onClick={() => this.props.addEpisodes(podcast.podcast_id)}
          >{podcast.title}</Link>
          <br></br>
          <span>Total Episodes: {podcast.total_episodes}</span>
        </div>
        <br></br>
        <Router>
          <Route path={`${match.path}/:topicId`}>
            <EpisodesContainer />
          </Route>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addEpisodes: id => dispatch(fetchPodcast(id))
})

export default connect(null,mapDispatchToProps)(Podcast);

// <Route path={'/podcasts/:podcastid'} component={EpisodesContainer} />
