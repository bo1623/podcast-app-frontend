import React,{Component} from 'react';


export default class PodcastShow extends Component {

  render(){
    console.log(this.props)
    return(
      <div>Inside podcastshow</div>
    )
  }

}

// {
//   const {podcast} = this.props
//   return(
//     <div className='podcast'>
//       <img src={podcast.image} />
//       <div className='podcast-details' >
//         <h3>{podcast.title}</h3>
//         <br></br>
//         <span>Total Episodes: {podcast.total_episodes}</span>
//       </div>
//       <br></br>
//     </div>
//   )
// }
