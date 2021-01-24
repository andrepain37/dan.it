import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePosts from './pages/HomePosts';
import UserPage from './pages/UserPage';

const queries = {
  toggle: '(max-width: 930px)', 
  toggleCols: '(min-width: 500px)'
}

const AppRoutes = () => {

  const isAuth = useSelector(st => st.user.isAuth);


  return (
    <Switch>
        <Route exact path='/'  >
            <HomePosts queries={queries} />
        </Route>
        <Switch>
          <ProtectedRoute authenticated={isAuth} exact path='/user/:userId' render={(rest) => <UserPage {...rest} queries={queries} />} />
        </Switch>
    </Switch>
  )
}

const ProtectedRoute = ({ authenticated, ...rest }) => {
  return authenticated ? <Route {...rest} /> : <Redirect to='/' />
}

export default AppRoutes