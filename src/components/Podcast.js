import React,{Component} from 'react';

class Podcast extends Component{

  render(){
    return(
      <div className='podcast'>
        <img src={this.props.podcast.title} />
        
      </div>
    )
  }

}


export default Podcast;
