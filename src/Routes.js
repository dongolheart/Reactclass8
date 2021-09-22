import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
  import Signin from './pages/auth/Signin'
  import Signup from './pages/auth/Signup'
import Cart from './pages/Cart'
import Homepage from './pages/Homepage'

    

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                      <Route exact path="/signup"component={Signup}/>
                     <Route exact path="/signin" component={Signin}/> 
                    <Route exact path="/cart" component={Cart}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
