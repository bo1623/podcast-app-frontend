import React,{Component} from 'react';
import fetchPodcasts from '../actions/fetchPodcasts'
import {connect} from 'react-redux'
import Podcast from '../components/Podcast'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import EpisodesContainer from './EpisodesContainer'

class PodcastsContainer extends Component{

  componentDidMount(){
    console.log(this.props)
    this.props.fetchPodcasts()
  }

  render(){
    // console.log(this.props.podcasts.podcasts)
    console.log(this.props.match)
    const {match} = this.props
    let podcast
    if(!!this.props.podcasts.podcasts){ //if the podcasts have loaded onto the state successfully then only can we carry out the line below,
      //otherwise an error will be thrown saying map cannot be called on undefined
      podcast=this.props.podcasts.podcasts.map(podcast=><Podcast podcast={podcast}/>)
    }
    return (
      <div className='podcast-container'>
        <ul>
          {podcast}
        </ul>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    podcasts:state.podcasts
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPodcasts: () => dispatch(fetchPodcasts())
})

export default connect(mapStateToProps,mapDispatchToProps)(PodcastsContainer)


// <Route path={`${match.url}/:podcastId`} render={routerProps => <PodcastEps {...routerProps} />}/>

//
// <ul>
//   {this.props.podcasts.map(podcast=><Podcast podcast={podcast} />)}
// </ul>

// <PodcastList podcasts={this.props.podcasts.podcasts}
