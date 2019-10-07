import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class PodcastList extends Component{

  render(){
    const {podcasts} = this.props

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


import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;
