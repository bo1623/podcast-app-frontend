import {combineReducers} from 'redux';
import cuid from 'cuid';


const podcastReducer = (state=[],action) => {

  switch(action.type){
    case "ADD_PODCAST":
      const podcasts = action.podcasts.map(podcast => {
        id: cuid(),
        title: podcast.name
      })
      return {
        podcasts
      }

    default:
      return state
  }
}


const subscribedReducer = (state=[],action) => {



}
