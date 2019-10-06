import {combineReducers} from 'redux';
import uuid from 'uuid';


const rootReducer=combineReducers({
  podcasts: podcastsReducer,
  subscriptions: subscriptionsReducer
})

export default rootReducer;

function podcastsReducer(state=[],action){

  switch(action.type){
    case "ADD_PODCAST":
      console.log(action)
      const podcasts = action.podcasts.map(podcast => {
        return {
          id: uuid(),
          title: podcast.url
        }
      })
      return {
        podcasts
      }

    default:
      return state
  }
}


function subscriptionsReducer(state=[],action){

  switch(action.type){
    case "ADD_SUBSCRIPTION":
      return [...state,action.podcast]

    case "REMOVE_SUBSCRIPTION":
      return state.filter(podcast=>podcast.id!==action.id)

    default:
      return state
  }

}
