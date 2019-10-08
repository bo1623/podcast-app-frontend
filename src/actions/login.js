const login = (username) =>{
  return dispatch =>{
    dispatch({type: "LOG_IN",username:username})
  }
}

export default login
