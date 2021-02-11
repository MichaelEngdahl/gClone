import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from "./features/userSlice"
import { auth } from "./firebase.js"
import './style/App.css';
import EmailList from "./EmailList"
import Header from "./Header.js"
import Login from "./Login.js"
import Mail from "./Mail.js"
import SendMail from "./SendMail.js"
import Sidebar from "./Sidebar.js"

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
    
  }, [])

  return (
    <Router>
      {!user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
              {sendMessageIsOpen && <SendMail />}
          </div>
        )
      }
    </Router>
  );
}

export default App;
