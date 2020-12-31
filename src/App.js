import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Call from './pages/Call'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
import AuthContext from './contexts/AuthContext'

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const loggedIn = async () => {
      let token = localStorage.getItem('auth-token')
      if (token === null) {
        localStorage.setItem("auth-token", "")
        token = ""
      }
      const tokenVerified = await axios.post(
        "/api/isTokenValid", 
        null,
        { headers: {"x-auth-token": token} }
      )
      if (tokenVerified.data) {
        const userRes = await axios.get(
          "/api/users/user",
          { headers: {"x-auth-token": token} }
        )
        setUserData({
          token,
          user: userRes.data
        })
      }
    }
    loggedIn()
  }, [])

  return (
    <Router>
      <AuthContext.Provider value={{userData, setUserData}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/call/:callId" component={Call} />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
