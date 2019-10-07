import {combineReducers} from 'redux';
import uuid from 'uuid';


const rootReducer=combineReducers({
  podcasts: podcastsReducer,
  subscriptions: subscriptionsReducer,
  episodes: episodesReducer
})

export default rootReducer;

function podcastsReducer(state=[],action){

  switch(action.type){
    case "ADD_PODCAST":
      console.log(action)
      const podcasts = action.podcasts.map(podcast => {
        return {
          podcast_id: podcast.id,
          title: podcast.title,
          thumbnail: podcast.thumbnail,
          image: podcast.image,
          total_episodes: podcast.total_episodes,
          latest_publication: podcast.latest_pub_date_ms
        }
      })
      return {
        podcasts
      }

    default:
      return state
  }
}

function episodesReducer(state=[],action){
  switch(action.type){
    case "ADD_EPISODES":
      console.log(action)
      const episodes=action.episodes.map(episode=>{
        return{
          title: episode.title,
          episode_id: episode.id,
          audio_length: episode.audio_length_sec,
          description: episode.description,
          published_date: episode.pub_date_ms
        }
      })
      return{
        episodes
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
