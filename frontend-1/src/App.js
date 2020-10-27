import UserForm from "./components/user-form/component";
import AdminTable from "./components/admin-table/component";
import NavBar from "./components/navBar/component";
import LoginForm from "./components/login/component";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'

const Logout = ({ onLogout }) => {
  useEffect(() => {
    onLogout()
  }, [])

  return <Redirect to='/login' />
}

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [login, setLogin] = useState('')

  const handleLogoutUser = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthorized(false);
    setLogin('')
    setCurrentUser({});
  };

  const handleLoginUser = ({ token, login }) => {
    localStorage.setItem("jwtToken", token);
    setIsAuthorized(true)
    const decoded = jwt_decode(token);
    setLogin(login)
    setCurrentUser(decoded)
  }

  return (
    <Router>
      <div className="site">
        <NavBar isAuthorized={isAuthorized} login={login}/>
        <div className="container">
          <Route exact path="/user-form" component={UserForm} />
          <Route exact path="/logout" component={() => <Logout onLogout={handleLogoutUser} />} />
          <Route path="/admin-table" render={() => !isAuthorized ? <Redirect to="/login" /> : <AdminTable />} />

          <Route path="/login" render={() => isAuthorized ? <Redirect to='/admin-table' /> : <LoginForm onLogin={handleLoginUser} />} />
        </div>
      </div>
    </Router >
  );
}

export default App;
