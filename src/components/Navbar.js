import React from 'react'
import './style.css'

function Navbar({ filterAnime }) {
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

                <div className='S_C'>
                    <input id='searchBox' type="text" />
                    <div className="category">

                        <button className='btn-group' onClick={() => filterAnime("Action")}>Action</button>
                        <button className='btn-group' onClick={() => filterAnime("War")}>War</button>
                        <button className='btn-group' onClick={() => filterAnime("Thriller")}>Thriller</button>
                        <button className='btn-group' onClick={() => filterAnime("Romance")}>Romance</button>
                        <button className='btn-group' onClick={() => filterAnime("Fantasy")}>Fantasy</button>
                        <button className='btn-group' onClick={() => filterAnime("All")}>All</button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Navbar
