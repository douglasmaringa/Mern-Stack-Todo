import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Login from './Login'
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the  user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      // Any cleanup operations go in here..
      unsubscribe();
    }
  }, []);

   console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>
            home page
              {
                user? (
                  <div>logged in {user.email}
                    <button variant="text" color="secondary" onClick={() => auth.signOut()}>
                     Log Out
                   </button>
                  </div>
                ):(
                  <div>not logged in
                     <Link to="/login">
                     <button variant="text" color="secondary">
                     Log IN
                     </button>
                     </Link>
                    </div>
                )
              }
              
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


