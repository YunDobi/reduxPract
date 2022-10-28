import React, {useState} from 'react'
import "./Login.css";
import PropTypes from "prop-types"


async function loginUser(req) {
  return fetch('http://localhost:8080/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  })
  .then(data => data.json())
}


export const Login = (prop) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log(token)
    prop.setToken(token);
  }

  return (
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>UserName</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}