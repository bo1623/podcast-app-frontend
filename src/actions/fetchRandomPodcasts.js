const fetchRandomPodcasts = () => {
  return dispatch => {
    // dispatch({type:"LOADING_CATS"})
    fetch('https://listen-api.listennotes.com/api/v2/just_listen',{
      method: 'GET',
      headers: {
        'X-ListenAPI-Key':'b5ad33b748ea42279366ccafabbd2d87'
      }
    }).then(resp=>resp.json())
  .then(json=>dispatch({type:"ADD_PODCAST", podcasts: json.podcasts}))
  }
}


export default fetchRandomPodcasts;
