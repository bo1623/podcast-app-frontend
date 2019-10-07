// const fetchPodcasts = () => {
//   return dispatch => {
//     // dispatch({type:"LOADING_CATS"})
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//     .then(resp=>resp.json())
//     .then(json=>dispatch({type:"ADD_PODCAST", podcasts: json.images}))
//   }
// }

const fetchPodcasts = () => {
  return dispatch => {
    // dispatch({type:"LOADING_CATS"})
    fetch('https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93',{
      method: 'GET',
      headers: {
        'X-ListenAPI-Key':'b5ad33b748ea42279366ccafabbd2d87'
      }
    }).then(resp=>resp.json())
  .then(json=>dispatch({type:"ADD_PODCAST", podcasts: json.podcasts}))
  }
}


export default fetchPodcasts;
