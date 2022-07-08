import React from "react";
import { Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import AdminLogin from "./components/adminLoginComp";
import AdminSignUp from "./components/adminSignUpComp";
import StudentLogin from "./components/studentLoginComp";
import StudentSignUp from "./components/studentSignUpComp";

function App() {

  const [user, setUser] = React.useState(null);

  async function login(user = null) {

    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/studentLogin" className="navbar-brand">
          RSET Placement Cell
        </a>
        <div className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to={"/studentLogin"} className="nav-link">
                Student Login
              </Link >
            </li>

            <li className="nav-item">
              <Link to={"/adminLogin"} className="nav-link">
                Admin Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/studentSignup"} className="nav-link">
                Student SignUp
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/adminSignup"} className="nav-link">
                Admin SignUp
              </Link>
            </li>

            <li className="nav-item" >
            { user && (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.user_name}
              </a>
            )}

          </li>

        </div>
      </nav>

      <div className="container mt-3">
        <Switch>

        <Route 
            path="/studentLogin"
            render={(props) => (
              <StudentLogin {...props} login={login} />
            )}
          />

          <Route 
            path="/adminLogin"
            render={(props) => (
              <AdminLogin {...props} login={login}/>
            )}
          />

          <Route 
            path="/studentSignup"
            render={(props) => (
              <StudentSignUp {...props} login={login} />
            )}
          />

          <Route 
            path="/adminSignup"
            render={(props) => (
              <AdminSignUp {...props} login={login} />
            )}
          />

        </Switch>
      </div>

    </div>
  );
}

export default App;
