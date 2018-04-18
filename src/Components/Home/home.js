import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './home.css'

export default class Home extends Component {

    componentDidMount() {
        const login = document.getElementById('login')
        login.style = "width: 200px;"
    }

    render() {
        return (
            <div>
                <div className="background-container">
                    <div className="log-in-container">
                        <div className="spotlightify-title">
                            <div>Spotlightify</div>
                        </div>
                        <div className="spotlightify-subtitle">
                            <div>By Logan Smith</div>
                        </div>
                        <Link to="/search">
                        <div className="log-in-button" id="login">
                            <div>Login with Spotify</div>
                        </div>
                        </Link>
                    </div>
                    <div className="animation-container">
                        <div className="row-1">
                            <div className="ball-1-1"></div>
                            <div className="ball-1-2"></div>
                            <div className="ball-1-3"></div>
                            <div className="ball-1-4"></div>
                            <div className="ball-1-5"></div>
                            <div className="ball-1-6"></div>
                            <div className="ball-1-7"></div>
                            <div className="ball-1-8"></div>
                            <div className="ball-1-9"></div>
                            <div className="ball-1-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-2-1"></div>
                            <div className="ball-2-2"></div>
                            <div className="ball-2-3"></div>
                            <div className="ball-2-4"></div>
                            <div className="ball-2-5"></div>
                            <div className="ball-2-6"></div>
                            <div className="ball-2-7"></div>
                            <div className="ball-2-8"></div>
                            <div className="ball-2-9"></div>
                            <div className="ball-2-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-3-1"></div>
                            <div className="ball-3-2"></div>
                            <div className="ball-3-3"></div>
                            <div className="ball-3-4"></div>
                            <div className="ball-3-5"></div>
                            <div className="ball-3-6"></div>
                            <div className="ball-3-7"></div>
                            <div className="ball-3-8"></div>
                            <div className="ball-3-9"></div>
                            <div className="ball-3-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-4-1"></div>
                            <div className="ball-4-2"></div>
                            <div className="ball-4-3"></div>
                            <div className="ball-4-4"></div>
                            <div className="ball-4-5"></div>
                            <div className="ball-4-6"></div>
                            <div className="ball-4-7"></div>
                            <div className="ball-4-8"></div>
                            <div className="ball-4-9"></div>
                            <div className="ball-4-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-5-1"></div>
                            <div className="ball-5-2"></div>
                            <div className="ball-5-3"></div>
                            <div className="ball-5-4"></div>
                            <div className="ball-5-5"></div>
                            <div className="ball-5-6"></div>
                            <div className="ball-5-7"></div>
                            <div className="ball-5-8"></div>
                            <div className="ball-5-9"></div>
                            <div className="ball-5-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-6-1"></div>
                            <div className="ball-6-2"></div>
                            <div className="ball-6-3"></div>
                            <div className="ball-6-4"></div>
                            <div className="ball-6-5"></div>
                            <div className="ball-6-6"></div>
                            <div className="ball-6-7"></div>
                            <div className="ball-6-8"></div>
                            <div className="ball-6-9"></div>
                            <div className="ball-6-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-7-1"></div>
                            <div className="ball-7-2"></div>
                            <div className="ball-7-3"></div>
                            <div className="ball-7-4"></div>
                            <div className="ball-7-5"></div>
                            <div className="ball-7-6"></div>
                            <div className="ball-7-7"></div>
                            <div className="ball-7-8"></div>
                            <div className="ball-7-9"></div>
                            <div className="ball-7-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-8-1"></div>
                            <div className="ball-8-2"></div>
                            <div className="ball-8-3"></div>
                            <div className="ball-8-4"></div>
                            <div className="ball-8-5"></div>
                            <div className="ball-8-6"></div>
                            <div className="ball-8-7"></div>
                            <div className="ball-8-8"></div>
                            <div className="ball-8-9"></div>
                            <div className="ball-8-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-9-1"></div>
                            <div className="ball-9-2"></div>
                            <div className="ball-9-3"></div>
                            <div className="ball-9-4"></div>
                            <div className="ball-9-5"></div>
                            <div className="ball-9-6"></div>
                            <div className="ball-9-7"></div>
                            <div className="ball-9-8"></div>
                            <div className="ball-9-9"></div>
                            <div className="ball-9-10"></div>
                        </div>
                        <div className="row-1">
                            <div className="ball-10-1"></div>
                            <div className="ball-10-2"></div>
                            <div className="ball-10-3"></div>
                            <div className="ball-10-4"></div>
                            <div className="ball-10-5"></div>
                            <div className="ball-10-6"></div>
                            <div className="ball-10-7"></div>
                            <div className="ball-10-8"></div>
                            <div className="ball-10-9"></div>
                            <div className="ball-10-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}