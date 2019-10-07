import React,{Component} from 'react';


export default class Episode extends Component {

  render(){
    const {episode} = this.props
    return(
      <div className="episode">
        <p>{episode.title}</p>
      </div>
    )
  }

}
