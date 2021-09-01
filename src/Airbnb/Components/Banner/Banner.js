import React from 'react'
import { Link } from 'react-router-dom'
import SearchDate from '../SearchDate/SearchDate'
import "./Banner.css"

const Banner = () => {
    return (
        <div className="bannerMainDiv">
            <SearchDate />
            <div className="bannerInfo">
                <div className="bannerLeft">
                    <img className="bannerLeftImg" src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="banner"/>
                </div>
                <div className="bannerRight">
                    <h2>Get out and strect your imagination</h2>
                    <p>Plan a different kind of gateway to uncover the hidden gems near you</p>
                    <Link to="/explore">
                    <button className="bannerRightButton">Explore Nearby</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
