import React from 'react'
import './style.css'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="main-heading">
                    <p id='main-title'>AnimeTime</p>

                    <div className='links'>

                        <a className='page-link' href="/">Anime </a>
                        <p> | </p>
                        <a className='page-link' href="/"> Meme </a>
                        <p> | </p>
                        <a className='page-link' href="/"> Wallpaper</a>
                    </div>
                </div>

                <input id='searchBox' type="text" />




            </div>
        </>
    )
}

export default Navbar
