import React, { useState } from "react";
import PortalAxios from "../services/portal_axios.js"

const Login = props => {

  const initialUserState = {
    user_name: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    PortalAxios.adminLogin(user)
    .then(response => {
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })

    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user_name">Username</label>
          <input
            type="text"
            className="form-control"
            id="user_name"
            required
            value={user.user_name}
            onChange={handleInputChange}
            name="user_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            required
            value={user.password}
            onChange={handleInputChange}
            name="password"
          />
        </div>

        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;