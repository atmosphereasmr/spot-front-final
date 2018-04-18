import React, { Component } from 'react'
import './search.css'

export default class Search extends Component {

    Hover(ball, title) {
        const darken = document.getElementById(ball)
        const lighten = document.getElementById(title)

        if (ball === "eminem-ball") {
            darken.style = "background-image: url('http://image.ibb.co/jtCyU7/eminem_dark.jpg'); background-size: cover; background-position: cover; transition: 0.5s;"
        }
        if (ball === "rihanna-ball") {
            darken.style = "background-image: url('http://image.ibb.co/jtCyU7/eminem_dark.jpg'); background-size: cover; background-position: cover; transition: 0.5s;"
        }
        lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
    }

    render() {
        return (
            <div className="search-background-container">
                <div className="search-background-image">
                    <div className="flash-top-header">
                        Your music
                    </div>
                    <div className="flash-title">
                        Spotlightify
                    </div>
                    <div className="flash-bottom-header">
                        Illuminated
                    </div>
                </div>
                <div className="artist-container">
                    <div className="artist-circle-eminem" id="eminem-ball" onMouseOver={() => this.Hover("eminem-ball", "eminem-title")}>
                        <div className="artist-title" id="eminem-title">
                        Eminem
                        </div>
                    </div>
                    <div className="artist-circle-rihanna" id="rihanna-ball" onMouseOver={() => this.Hover("rihanna-ball", "rihanna-title")}>
                    <div className="artist-title" id="rihanna-title">
                        Rihanna
                        </div>
                    </div>
                    <div className="artist-circle-drake">
                    <div className="artist-title">
                        Drake
                        </div>
                    </div>
                    <div className="artist-circle-lady-gaga">
                    <div className="artist-title">
                        Lady Gaga
                        </div>
                    </div>
                    <div className="artist-circle-marilyn">
                    <div className="artist-title">
                        Marilyn Manson
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}