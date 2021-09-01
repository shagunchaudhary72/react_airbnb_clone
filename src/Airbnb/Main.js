import React from 'react'
import "./Main.css"
import Navbar from './Components/Header/Navbar'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import Explore from './Pages/ExplorePage/Explore'


const Main = () => {
    return (
        <Router >
        <div className="mainContainer">
            <Navbar />
            <Switch >
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/explore">
                    <Explore />
                </Route>
            </Switch>
            <Footer/>
        </div>
        </Router>
    )
}

export default Main
