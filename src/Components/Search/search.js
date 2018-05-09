import React, { Component } from 'react'
import './search.css'
import axios from 'axios'
import ScrollListener from 'react-scroll-listen'

export default class Search extends Component {

    componentDidMount() {

        this.setState({ accessToken: this.props.match.params.access.split('=')[1] }, () => console.log(this.state))

        const rihanna = document.getElementById('rihanna-ball')
        const rihannaTop = rihanna.offsetTop
        const rihannaLeft = rihanna.offsetLeft
        const rihannaWidth = rihanna.offsetWidth
        const rihannaHeight = rihanna.offsetHeight

        const goBackBall = document.getElementById('go-back-ball')
        goBackBall.style = `top: ${rihannaTop}px; left: ${rihannaLeft}px; width: ${rihannaWidth}px; height: ${rihannaHeight}px;`

        const gaga = document.getElementById('lady-gaga-ball')
        const gagaTop = gaga.offsetTop
        const gagaLeft = gaga.offsetLeft
        const gagaWidth = gaga.offsetWidth
        const gagaHeight = gaga.offsetHeight

        const listenBall = document.getElementById('listen-ball')
        listenBall.style = `top: ${gagaTop}px; left: ${gagaLeft}px; width: ${gagaWidth}px; height: ${gagaHeight}px;`

        this.scroller(this.state.scrollPosition)
    }

    constructor(props) {
        super(props)
        this.state = {
            chosen: "",
            chosenRight: "",
            accessToken: "",
            scrollPosition: 0,
            searchArtist: "Drake",
            artistLink: ""
        }
    }

    link() {
        window.location = `http://open.spotify.com/artist/${this.state.artistLink}`
    }

    scroller() {
        const searchBox = document.getElementById('search-box')
        window.onscroll = () => {
            if (this.state.scrollPosition > 5) {
                searchBox.style = "animation: scroll-down 0.5s forwards;"
            } else if (this.state.scrollPosition < 5) {
                searchBox.style = "animation: scroll-up 0.5s forwards;"
            }
        }
    }

    search(input) {

        const eminem = document.getElementById('eminem-ball')
        const rihanna = document.getElementById('rihanna-ball')
        const drake = document.getElementById('drake-ball')
        const lady_gaga = document.getElementById('lady-gaga-ball')
        const manson = document.getElementById('manson-ball')

        rihanna.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
        lady_gaga.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
        manson.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
        eminem.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"

        const ball1 = document.getElementById('green-ball-1')
        const ball2 = document.getElementById('green-ball-2')
        const ball3 = document.getElementById('green-ball-3')
        const ball4 = document.getElementById('grey-ball-1')
        const ball5 = document.getElementById('grey-ball-2')
        const ball6 = document.getElementById('grey-ball-3')

        ball1.className = "green-ball"
        ball2.className = "green-ball"
        ball3.className = "green-ball"
        ball4.className = "grey-ball"
        ball5.className = "grey-ball"
        ball6.className = "grey-ball"

        const goBackBall = document.getElementById("go-back-ball")
        goBackBall.className = "go-back-ball-on"

        const listenBall = document.getElementById('listen-ball')
        listenBall.className = "listen-ball-on"

        const lighten = document.getElementById('drake-title')
        lighten.style = "animation: title-fade-in 0.5s 0s forwards;"

        this.setState({ chosen: "drake" })

        axios.get(`https://api.spotify.com/v1/search?q=${input}&type=artist`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
            .then(res => {
                console.log(res)
                this.setState({
                    searchArtistPic: res.data.artists.items[0].images[0].url,
                    searchArtist: res.data.artists.items[0].name,
                    followers: res.data.artists.items[0].followers.total,
                    genre: res.data.artists.items[0].genres[0],
                    popularity: res.data.artists.items[0].popularity,
                    searchImage: res.data.artists.items[0].images[0].url,
                    searchId: res.data.artists.items[0].id,
                    artistLink: res.data.artists.items[0].id
                }, () => {
                    drake.style = `background-image: url(${this.state.searchImage}); pointer-events: none;`
                    axios.get(`https://api.spotify.com/v1/artists/${this.state.searchId}/related-artists`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                        .then(res => {
                            this.setState({
                                ball4Background: res.data.artists[0].images[0].url,
                                ball4name: res.data.artists[0].name,
                                ball5Background: res.data.artists[1].images[0].url,
                                ball5name: res.data.artists[1].name,
                                ball6Background: res.data.artists[2].images[0].url,
                                ball6name: res.data.artists[2].name
                            })

                            ball4.style = `background-image: url('${this.state.ball4Background}')`
                            ball5.style = `background-image: url('${this.state.ball5Background}')`
                            ball6.style = `background-image: url('${this.state.ball6Background}')`
                        })
                })
            })


    }

    turnOff() {
        console.log(3333)
    }

    Chosen(artist) {
        const eminem = document.getElementById('eminem-ball')
        const rihanna = document.getElementById('rihanna-ball')
        const drake = document.getElementById('drake-ball')
        const lady_gaga = document.getElementById('lady-gaga-ball')
        const manson = document.getElementById('manson-ball')

        if (artist === "eminem") {

            const eminemRight = eminem.offsetLeft
            this.setState({ chosenRight: eminemRight, chosen: "eminem" })

            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft


            eminem.style = `background-image: url('https://image.ibb.co/nAfrgn/eminem_dark.jpg'); position: relative; transform: translateX(${right}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('eminem-title')
            title.style = "opacity: 1;"

            this.Hover = function () { }
            this.HoverOff = function () { }

            rihanna.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
            drake.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
            manson.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"

            this.artistClick('7dGJo4pcD2V6oG8kP0tJRR')

        }
        if (artist === "rihanna") {

            const rihannaRight = eminem.offsetLeft
            this.setState({ chosenRight: rihannaRight, chosen: "rihanna" })

            eminem.style = "animation: ball-hide 0.5s forwards;"
            drake.style = "animation: ball-hide 0.5s forwards;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards;"
            manson.style = "animation: ball-hide 0.5s forwards;"

            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft
            const rihanna_dist = document.getElementById('rihanna-ball').offsetLeft
            const correct_dist = right - rihanna_dist

            rihanna.style = `background-image: url('https://image.ibb.co/cCWTu7/rihanna_dark.jpg'); position: relative; transform: translateX(${correct_dist}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('rihanna-title')
            title.style = "opacity: 1;"

            this.Hover = function () { }
            this.HoverOff = function () { }

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"

            this.artistClick('5pKCCKE2ajJHZ9KAiaK11H', 'rihanna')
        }
        if (artist === "drake") {

            const drakeRight = eminem.offsetLeft
            this.setState({ chosenRight: drakeRight, chosen: "drake" })

            rihanna.style = "animation: ball-hide 0.5s forwards;"
            eminem.style = "animation: ball-hide 0.5s forwards;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards;"
            manson.style = "animation: ball-hide 0.5s forwards;"


            this.Hover = function () { }
            this.HoverOff = function () { }

            drake.style = `background-image: url('https://image.ibb.co/jOw8Yc/drake_dark.jpg');`

            const title = document.getElementById('drake-title')
            title.style = "opacity: 1;"

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"

            this.artistClick('3TVXtAsR1Inumwj472S9r4')
        }
        if (artist === "lady-gaga") {

            const gagaRight = eminem.offsetLeft
            this.setState({ chosenRight: gagaRight, chosen: "lady-gaga" })

            rihanna.style = "animation: ball-hide 0.5s forwards;"
            drake.style = "animation: ball-hide 0.5s forwards;"
            eminem.style = "animation: ball-hide 0.5s forwards;"
            manson.style = "animation: ball-hide 0.5s forwards;"

            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft
            const lady_gaga_dist = document.getElementById('lady-gaga-ball').offsetLeft
            const correct_dist = right - lady_gaga_dist

            lady_gaga.style = `background-image: url('https://image.ibb.co/jqE6KH/lady_gaga_dark.jpg'); position: relative; transform: translateX(${correct_dist}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('lady-gaga-title')
            title.style = "opacity: 1;"


            this.Hover = function () { }
            this.HoverOff = function () { }

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"

            this.artistClick('1HY2Jd0NmPuamShAr6KMms')
        }
        if (artist === "manson") {

            const mansonRight = eminem.offsetLeft
            this.setState({ chosenRight: mansonRight, chosen: "manson" })

            rihanna.style = "animation: ball-hide 0.5s forwards;"
            drake.style = "animation: ball-hide 0.5s forwards;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards;"
            eminem.style = "animation: ball-hide 0.5s forwards;"


            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft
            const manson_dist = document.getElementById('manson-ball').offsetLeft
            const correct_dist = right - manson_dist

            manson.style = `background-image: url('https://image.ibb.co/npxnRx/marilyn_dark.jpg'); position: relative; transform: translateX(${correct_dist}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('manson-title')
            title.style = "opacity: 1;"

            this.Hover = function () { }
            this.HoverOff = function () { }

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"

            this.artistClick('2VYQTNDsvvKN9wmU5W7xpj')
        }

        const ball1 = document.getElementById('green-ball-1')
        const ball2 = document.getElementById('green-ball-2')
        const ball3 = document.getElementById('green-ball-3')
        const ball4 = document.getElementById('grey-ball-1')
        const ball5 = document.getElementById('grey-ball-2')
        const ball6 = document.getElementById('grey-ball-3')
        ball1.className = "green-ball"
        ball2.className = "green-ball"
        ball3.className = "green-ball"
        ball4.className = "grey-ball"
        ball5.className = "grey-ball"
        ball6.className = "grey-ball"


    }

    artistClick(id) {
        axios.get(`https://api.spotify.com/v1/artists/${id}`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
            .then(res => {
                console.log(3333333333333, res)
                this.setState({ followers: res.data.followers.total, artistLink: res.data.id, genre: res.data.genres[0], popularity: res.data.popularity }, () => console.log(res))
            })

        axios.get(`https://api.spotify.com/v1/artists/${id}/related-artists`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
            .then(res => {
                console.log(11111, res)
                this.setState({
                    ball4Background: res.data.artists[0].images[0].url,
                    ball5Background: res.data.artists[1].images[0].url,
                    ball6Background: res.data.artists[2].images[0].url,
                    ball4name: res.data.artists[0].name,
                    ball5name: res.data.artists[1].name,
                    ball6name: res.data.artists[2].name

                }, () => {
                    const ball4 = document.getElementById('grey-ball-1')
                    const ball5 = document.getElementById('grey-ball-2')
                    const ball6 = document.getElementById('grey-ball-3')
                    ball4.style = `background-image: url('${this.state.ball4Background}')`
                    ball5.style = `background-image: url('${this.state.ball5Background}')`
                    ball6.style = `background-image: url('${this.state.ball6Background}')`
                    console.log(444444, this.state)
                })
            })

        const ball1 = document.getElementById('grey-ball-1')

        const ball1Top = ball1.offsetTop
        const ball1Left = ball1.offsetLeft
        const ball1Width = ball1.offsetWidth
        const ball1Height = ball1.offsetHeight

        console.log(3333, ball1Top, ball1Left, ball1Width, ball1Height)

        const relateBall = document.getElementById('related-ball')
        relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; height: ${ball1Height}px; opacity: 0;`
    }


    Hover(title) {
        const lighten = document.getElementById(title)
        lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
    }

    HoverOff(title) {
        const lighten = document.getElementById(title)
        lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
    }

    goBack() {
        const eminem = document.getElementById('eminem-ball')
        const rihanna = document.getElementById('rihanna-ball')
        const drake = document.getElementById('drake-ball')
        const lady_gaga = document.getElementById('lady-gaga-ball')
        const manson = document.getElementById('manson-ball')

        const ball1 = document.getElementById('green-ball-1')
        const ball2 = document.getElementById('green-ball-2')
        const ball3 = document.getElementById('green-ball-3')
        const ball4 = document.getElementById('grey-ball-1')
        const ball5 = document.getElementById('grey-ball-2')
        const ball6 = document.getElementById('grey-ball-3')
        ball1.className = "green-ball-off"
        ball2.className = "green-ball-off"
        ball3.className = "green-ball-off"
        ball4.className = "grey-ball-off"
        ball5.className = "grey-ball-off"
        ball6.className = "grey-ball-off"

        const greyBall1 = document.getElementById('grey-ball-1')

        const greyBall1Top = greyBall1.offsetTop
        const greyBall1Left = greyBall1.offsetLeft
        const greyBall1Width = greyBall1.offsetWidth
        const greyBall1Height = greyBall1.offsetHeight


        const drakeTitle = document.getElementById('drake-title')

        drake.style = "background-image: url('https://image.ibb.co/mOcar7/drake.jpg')"
        drakeTitle.style = "animation: title-fade-out 0.5s forwards;"

        this.setState({
            searchArtist: "Drake"
        })


        const relateBall = document.getElementById('related-ball')
        relateBall.style = `top: ${greyBall1Top}px; left: ${greyBall1Left}px; width: ${greyBall1Width}px; height: ${greyBall1Height}px; opacity: 0; pointer-events: none;`

        if (this.state.chosen === "eminem") {
            eminem.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/iJQVeH/eminem.png)`

            const title = document.getElementById('eminem-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            rihanna.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "rihanna") {
            rihanna.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/cdnXtc/rihanna.jpg)`

            const title = document.getElementById('rihanna-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "drake") {

            drake.style = `transition: 0.5s; background-image: url(https://image.ibb.co/h17e6x/drake.jpg)`

            const title = document.getElementById('drake-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            rihanna.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "lady-gaga") {

            lady_gaga.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/nrfozH/lady_gaga.jpg)`

            const title = document.getElementById('lady-gaga-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            rihanna.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "manson") {

            manson.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/jre3US/marilyn.jpg)`

            const title = document.getElementById('manson-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            rihanna.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"



            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }

        }
    }

    relatedMouseOver(id) {
        console.log('okay')
        const ball = document.getElementById(id)
        if (id === 'grey-ball-1') {
            ball.style = `filter: grayscale(0); background-image: url(${this.state.ball4Background});`
        } else if (id === 'grey-ball-2') {
            ball.style = `filter: grayscale(0); background-image: url(${this.state.ball5Background});`
        } else if (id === 'grey-ball-3') {
            ball.style = `filter: grayscale(0); background-image: url(${this.state.ball6Background});`
        }
    }

    relatedMouseOff(id) {
        console.log('okay')
        const ball = document.getElementById(id)
        if (id === 'grey-ball-1') {
            ball.style = `filter: grayscale(1); background-image: url(${this.state.ball4Background});`
        } else if (id === 'grey-ball-2') {
            ball.style = `filter: grayscale(1); background-image: url(${this.state.ball5Background});`
        } else if (id === 'grey-ball-3') {
            ball.style = `filter: grayscale(1); background-image: url(${this.state.ball6Background});`
        }
    }

    setRelateBall1() {

        axios.get(`https://api.spotify.com/v1/search?q=${this.state.ball4name}&type=artist`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
            .then(res => {
                console.log(res)
                this.setState({
                    followers: res.data.artists.items[0].followers.total,
                    genre: res.data.artists.items[0].genres[0],
                    popularity: res.data.artists.items[0].popularity,
                    relatedBackground: res.data.artists.items[0].images[0],
                    relatedName: res.data.artists.items[0].name,
                    relatedId: res.data.artists.items[0].id,
                    artistLink: res.data.artists.items[0].id
                }, () => {
                    axios.get(`https://api.spotify.com/v1/artists/${this.state.relatedId}/related-artists`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                        .then(res => {
                            console.log(44444, res)
                            this.setState({
                                ball4Background: res.data.artists[0].images[0].url,
                                ball4name: res.data.artists[0].name,
                                ball5Background: res.data.artists[1].images[0].url,
                                ball5name: res.data.artists[1].name,
                                ball6Background: res.data.artists[2].images[0].url,
                                ball6name: res.data.artists[2].name
                            }, () => {

                                console.log('here is the state', this.state)

                                const ball4 = document.getElementById('grey-ball-1')
                                const ball5 = document.getElementById('grey-ball-2')
                                const ball6 = document.getElementById('grey-ball-3')

                                ball4.style = `background-image: url(${this.state.ball4Background})`
                                ball5.style = `background-image: url(${this.state.ball5Background})`
                                ball6.style = `background-image: url(${this.state.ball6Background})`
                            })
                        })
                })
            })

        if (this.state.chosen === 'rihanna') {
            const rihanna = document.getElementById('rihanna-ball')
            rihanna.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'drake') {
            const drake = document.getElementById('drake-ball')
            drake.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'eminem') {
            const eminem = document.getElementById('eminem-ball')
            eminem.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'lady-gaga') {
            const gaga = document.getElementById('lady-gaga-ball')
            gaga.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'manson') {
            const manson = document.getElementById('manson-ball')
            manson.style = `animation: ball-hide 0s forwards;`
        }

        const ball1 = document.getElementById('grey-ball-1')

        const ball1Top = ball1.offsetTop
        const ball1Left = ball1.offsetLeft
        const ball1Width = ball1.offsetWidth
        const ball1Height = ball1.offsetHeight

        console.log(33333, this.state)

        const relateBall = document.getElementById('related-ball')
        relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; background-image: url(${this.state.ball4Background}); height: ${ball1Height}px; opacity: 0;`

    }

    setRelateBall2() {

        axios.get(`https://api.spotify.com/v1/search?q=${this.state.ball5name}&type=artist`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
            .then(res => {
                console.log(res)
                this.setState({
                    followers: res.data.artists.items[0].followers.total,
                    genre: res.data.artists.items[0].genres[0],
                    popularity: res.data.artists.items[0].popularity,
                    relatedBackground: res.data.artists.items[0].images[0],
                    relatedName: res.data.artists.items[0].name,
                    relatedId: res.data.artists.items[0].id,
                    artistLink: res.data.artists.items[0].id
                }, () => {
                    axios.get(`https://api.spotify.com/v1/artists/${this.state.relatedId}/related-artists`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                        .then(res => {
                            console.log(44444, res)
                            this.setState({
                                ball4Background: res.data.artists[0].images[0].url,
                                ball4name: res.data.artists[0].name,
                                ball5Background: res.data.artists[1].images[0].url,
                                ball5name: res.data.artists[1].name,
                                ball6Background: res.data.artists[2].images[0].url,
                                ball6name: res.data.artists[2].name
                            }, () => {

                                console.log('here is the state', this.state)

                                const ball4 = document.getElementById('grey-ball-1')
                                const ball5 = document.getElementById('grey-ball-2')
                                const ball6 = document.getElementById('grey-ball-3')

                                ball4.style = `background-image: url(${this.state.ball4Background})`
                                ball5.style = `background-image: url(${this.state.ball5Background})`
                                ball6.style = `background-image: url(${this.state.ball6Background})`
                            })
                        })
                })
            })

        if (this.state.chosen === 'rihanna') {
            const rihanna = document.getElementById('rihanna-ball')
            rihanna.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'drake') {
            const drake = document.getElementById('drake-ball')
            drake.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'eminem') {
            const eminem = document.getElementById('eminem-ball')
            eminem.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'lady-gaga') {
            const gaga = document.getElementById('lady-gaga-ball')
            gaga.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'manson') {
            const manson = document.getElementById('manson-ball')
            manson.style = `animation: ball-hide 0s forwards;`
        }

        const ball1 = document.getElementById('grey-ball-2')

        const ball1Top = ball1.offsetTop
        const ball1Left = ball1.offsetLeft
        const ball1Width = ball1.offsetWidth
        const ball1Height = ball1.offsetHeight

        console.log(33333, this.state)

        const relateBall = document.getElementById('related-ball')
        relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; background-image: url(${this.state.ball4Background}); height: ${ball1Height}px; opacity: 0;`

    }

    setRelateBall3() {

        axios.get(`https://api.spotify.com/v1/search?q=${this.state.ball6name}&type=artist`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
            .then(res => {
                console.log(res)
                this.setState({
                    followers: res.data.artists.items[0].followers.total,
                    genre: res.data.artists.items[0].genres[0],
                    popularity: res.data.artists.items[0].popularity,
                    relatedBackground: res.data.artists.items[0].images[0],
                    relatedName: res.data.artists.items[0].name,
                    relatedId: res.data.artists.items[0].id,
                    artistLink: res.data.artists.items[0].id
                }, () => {
                    axios.get(`https://api.spotify.com/v1/artists/${this.state.relatedId}/related-artists`, { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                        .then(res => {
                            console.log(44444, res)
                            this.setState({
                                ball4Background: res.data.artists[0].images[0].url,
                                ball4name: res.data.artists[0].name,
                                ball5Background: res.data.artists[1].images[0].url,
                                ball5name: res.data.artists[1].name,
                                ball6Background: res.data.artists[2].images[0].url,
                                ball6name: res.data.artists[2].name
                            }, () => {

                                console.log('here is the state', this.state)

                                const ball4 = document.getElementById('grey-ball-1')
                                const ball5 = document.getElementById('grey-ball-2')
                                const ball6 = document.getElementById('grey-ball-3')

                                ball4.style = `background-image: url(${this.state.ball4Background})`
                                ball5.style = `background-image: url(${this.state.ball5Background})`
                                ball6.style = `background-image: url(${this.state.ball6Background})`
                            })
                        })
                })
            })

        if (this.state.chosen === 'rihanna') {
            const rihanna = document.getElementById('rihanna-ball')
            rihanna.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'drake') {
            const drake = document.getElementById('drake-ball')
            drake.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'eminem') {
            const eminem = document.getElementById('eminem-ball')
            eminem.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'lady-gaga') {
            const gaga = document.getElementById('lady-gaga-ball')
            gaga.style = `animation: ball-hide 0s forwards;`
        } else if (this.state.chosen === 'manson') {
            const manson = document.getElementById('manson-ball')
            manson.style = `animation: ball-hide 0s forwards;`
        }

        const ball1 = document.getElementById('grey-ball-3')

        const ball1Top = ball1.offsetTop
        const ball1Left = ball1.offsetLeft
        const ball1Width = ball1.offsetWidth
        const ball1Height = ball1.offsetHeight

        console.log(33333, this.state)

        const relateBall = document.getElementById('related-ball')
        relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; background-image: url(${this.state.ball6Background}); height: ${ball1Height}px; opacity: 0;`

    }

    relatedClick(id) {


        if (id === 'grey-ball-1') {

            this.setRelateBall1()

            const ball1 = document.getElementById('drake-ball')

            const ball1Top = ball1.offsetTop
            const ball1Left = ball1.offsetLeft
            const ball1Width = ball1.offsetWidth
            const ball1Height = ball1.offsetHeight

            console.log(3333, ball1Top, ball1Left, ball1Width, ball1Height)

            const relateBall = document.getElementById('related-ball')
            relateBall.className = "related-ball"
            relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; height: ${ball1Height}px; background-image: url(${this.state.ball4Background}); background-size: cover; opacity: 1; transition: 1s;`
        }

        if (id === 'grey-ball-2') {

            this.setRelateBall2()

            const ball1 = document.getElementById('drake-ball')

            const ball1Top = ball1.offsetTop
            const ball1Left = ball1.offsetLeft
            const ball1Width = ball1.offsetWidth
            const ball1Height = ball1.offsetHeight

            console.log(3333, ball1Top, ball1Left, ball1Width, ball1Height)

            const relateBall = document.getElementById('related-ball')
            relateBall.className = "related-ball"
            relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; height: ${ball1Height}px; background-image: url(${this.state.ball5Background}); background-size: cover; opacity: 1; transition: 1s;`
        }

        if (id === 'grey-ball-3') {

            this.setRelateBall3()

            const ball1 = document.getElementById('drake-ball')

            const ball1Top = ball1.offsetTop
            const ball1Left = ball1.offsetLeft
            const ball1Width = ball1.offsetWidth
            const ball1Height = ball1.offsetHeight

            console.log(3333, ball1Top, ball1Left, ball1Width, ball1Height)

            const relateBall = document.getElementById('related-ball')
            relateBall.className = "related-ball"
            relateBall.style = `top: ${ball1Top}px; left: ${ball1Left}px; width: ${ball1Width}px; height: ${ball1Height}px; background-image: url(${this.state.ball6Background}); background-size: cover; opacity: 1; transition: 1s;`
        }
    }

    render() {
        return (
            <div className="search-background-container">
                <ScrollListener
                    onScroll={value => this.setState({ scrollPosition: value })}
                />
                <div className="search-bar-container" id="search-box">
                    <input placeholder="Enter an artist..." onChange={e => this.setState({ input: e.target.value })}></input>
                    <div className="glass-icon" onClick={() => this.search(this.state.input)}></div>
                </div>
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
                <div className="artist-container" id="container">
                    <div className="artist-circle-eminem" id="eminem-ball" onMouseOver={() => this.Hover("eminem-title")} onMouseLeave={() => this.HoverOff("eminem-title")} onClick={() => this.Chosen('eminem')}>
                        <div className="artist-title" id="eminem-title">
                            Eminem
                        </div>
                    </div>
                    <div className="artist-circle-rihanna" id="rihanna-ball" onMouseOver={() => this.Hover("rihanna-title")} onMouseLeave={() => this.HoverOff("rihanna-title")} onClick={() => this.Chosen('rihanna')}>
                        <div className="artist-title" id="rihanna-title">
                            Rihanna
                        </div>
                    </div>
                    <div className="artist-circle-drake" id="drake-ball" onMouseOver={() => this.Hover("drake-title")} onMouseLeave={() => this.HoverOff("drake-title")} onClick={() => this.Chosen('drake')}>
                        <div className="artist-title" id="drake-title">
                            {this.state.searchArtist}
                        </div>
                    </div>
                    <div className="artist-circle-lady-gaga" id="lady-gaga-ball" onMouseOver={() => this.Hover("lady-gaga-title")} onMouseLeave={() => this.HoverOff("lady-gaga-title")} onClick={() => this.Chosen('lady-gaga')}>
                        <div className="artist-title" id="lady-gaga-title">
                            Lady Gaga
                        </div>
                    </div>
                    <div className="artist-circle-marilyn" id="manson-ball" onMouseOver={() => this.Hover("manson-title")} onMouseLeave={() => this.HoverOff("manson-title")} onClick={() => this.Chosen('manson')}>
                        <div className="artist-title" id="manson-title">
                            Marilyn Manson
                        </div>
                    </div>
                </div>
                <div className="green-row-container-1">
                    <div className="black-ball"></div>
                    <div className="green-ball-off" id="green-ball-1">
                        <div>Followers</div>
                        <div>{this.state.followers}</div>
                    </div>
                    <div className="green-ball-off" id="green-ball-2">
                        <div>Genre</div>
                        <div>{this.state.genre}</div>
                    </div>
                    <div className="green-ball-off" id="green-ball-3">
                        <div>Popularity</div>
                        <div>{this.state.popularity}</div>
                    </div>
                    <div className="black-ball"></div>
                </div>
                <div className="green-row-container-1">
                    <div className="black-ball"></div>
                    <div className="grey-ball-off" id="grey-ball-1" onMouseOver={() => this.relatedMouseOver('grey-ball-1')} onMouseLeave={() => this.relatedMouseOff('grey-ball-1')} onClick={() => this.relatedClick('grey-ball-1')}>
                        <div className="related-artist-title">
                            {this.state.ball4name}
                        </div>
                    </div>
                    <div className="grey-ball-off" id="grey-ball-2" onMouseOver={() => this.relatedMouseOver('grey-ball-2')} onMouseLeave={() => this.relatedMouseOff('grey-ball-2')} onClick={() => this.relatedClick('grey-ball-2')}>
                        <div className="related-artist-title">
                            {this.state.ball5name}
                        </div>
                    </div>
                    <div className="grey-ball-off" id="grey-ball-3" onMouseOver={() => this.relatedMouseOver('grey-ball-3')} onMouseLeave={() => this.relatedMouseOff('grey-ball-3')} onClick={() => this.relatedClick('grey-ball-3')}>
                        <div className="related-artist-title">
                            {this.state.ball6name}
                        </div>
                    </div>
                    <div className="black-ball"></div>
                </div>
                <div className="go-back-ball" id="go-back-ball" onClick={() => this.goBack()}>
                    Go Back
                </div>
                <div className="listen-ball" id="listen-ball" onClick={() => this.link()}>
                    Listen on Spotify
                </div>
                <div className="related-ball" id="related-ball">
                    <div className="related-artist-title" id="related-title">
                        {this.state.relatedName}
                    </div>
                </div>
            </div>
        )
    }
}