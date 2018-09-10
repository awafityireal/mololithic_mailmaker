import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/dashboard')
  }
  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/dashboard')
  }
  render() {
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <h1> Login in the application</h1>
              <h2> You can choose by Sign-In with google, facebook or password authentification</h2>
            </div>
            <div className="auth login">
              <a href='/auth/google' className="google">
                <i className="fab fa-google-plus-g"></i>
                <span>Sign In with google</span>
              </a>
              <a href='/auth/facebook' className="facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Sign In with facebook</span>
              </a>
              <h3>Or Login here</h3>
              <form
                className='authform'
                action="/api/users/login"
                method="post">
                <input
                  placeholder='Your Email'
                  name='email'
                  type='email'
                />
                <input
                  placeholder='Required Password'
                  name='password'
                  type='password'
                />
                <button type='submit'>
                  Login
                </button>
              </form>
              <span>You doen't have an account yet?
                <Link to='/register'>Register</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Login))
