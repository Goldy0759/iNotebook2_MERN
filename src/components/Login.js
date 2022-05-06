import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({email: "", password: ""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    if(json.success){
      localStorage.setItem('auth-token', json.authToken);
      history.push("/");
      props.showAlert("Logged in Successfully!", "info")
    }
    else{
      props.showAlert("Invalid Credentials!", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className="container-fluid mt-2 text-white" style={{'background-color' : '#192734', 'padding': '3%', }}>
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-white bg-dark">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login