import React,{Component} from 'react'
import {connect} from 'react-redux'

class Login extends Component{

  state={
    username:''
  }

  handleOnChange=()=>{
    this.setState({
      username: event.target.value
    })
  }

  render(){
    return(
      <form className="login-form">
        <label>Username: </label>
          <input onChange={this.handleOnChange} type="text" name="username" placeholder="Enter username" value={this.state.username} />
          <input type="submit" value="Login" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch()
})


export default connect(null,mapDispatchToProps)(Login)
