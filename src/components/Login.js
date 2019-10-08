import React,{Component} from 'react'
import {connect} from 'react-redux'
import login from '../actions/login'

class Login extends Component{

  state={
    username:''
  }

  handleOnChange=event=>{
    this.setState({
      username: event.target.value
    })
  }

  handleOnSubmit=event=>{
    event.preventDefault()
    this.props.login(this.state.username)
  }

  render(){
    return(
      <form className="login-form" onSubmit={this.handleOnSubmit}>
        <label>Username: </label>
          <input onChange={this.handleOnChange} type="text" name="username" placeholder="Enter username" value={this.state.username} />
          <input type="submit" value="Login" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(login(username))
})


export default connect(null,mapDispatchToProps)(Login)
