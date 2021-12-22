import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <div className="main-home">
                <Header title="compute(shape)" subtitle="<brandon lee tran/>"></Header>
            </div>
            <div className="home-button-container">
                <Link to="/shape" id="continue-btn">Continue</Link>
            </div>
        </>
    )
}

export default Home