import React,{Component} from 'react';

class Podcast extends Component{

  render(){
    const {podcast} = this.props

    return(
      <div className='podcast'>
        <img src={podcast.image} />
        <div className='podcast-details'>
          <span>{podcast.title}</span>
          <br></br>
          <span>Total Episodes: {podcast.total_episodes}</span>
        </div>
        <br></br>
      </div>
    )
  }

}


export default Podcast;
