import React,{Component} from 'react';
import fetchPodcasts from '../actions/fetchPodcasts'
import {connect} from 'react-redux'
import Podcast from '../components/Podcast'

class PodcastsContainer extends Component{

  componentDidMount(){
    console.log(this.props)
    this.props.fetchPodcasts()
  }

  render(){
    // console.log(this.props.podcasts.podcasts)
    let podcast
    if(!!this.props.podcasts.podcasts){ //if the podcasts have loaded onto the state successfully
      podcast=this.props.podcasts.podcasts.map(podcast=><Podcast podcast={podcast} />)
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
//
// <ul>
//   {this.props.podcasts.map(podcast=><Podcast podcast={podcast} />)}
// </ul>
