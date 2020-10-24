import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Core/Home'
import SignIn from './SignIn/signin'
import User from './User/user'
import About from './About/about'
import createWord from './Post/createWord'
import readWord from './Post/readWord'
import updateWord from './Post/updateWord'
import deleteWord from './Post/deleteWord'

const MainRouter = () => {

    return (<div>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/createword" component={createWord}/>
        <Route exact path="/readword" component={readWord}/>
        <Route exact path="/updateword" component={updateWord}/>
        <Route exact path="/deleteword" component={deleteWord}/>

      </Switch>
    </div>)
}

export default MainRouter
