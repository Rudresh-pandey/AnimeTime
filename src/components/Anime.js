import React from 'react'
import './style.css'
function Anime({ DemoData }) {


    return (
        <>
            <div className='animeList'>
                {
                    DemoData.map((currEle, i) => {
                        const { image, name, imdb, tomato, seasons, eps, desc } = currEle;
                        return (
                            <>
                                <div className='Anime-Card' key={i}>
                                    <img className='Anime-img' src={image} alt="" />
                                    <div className='animecard'>
                                        <p className='AnimeHeading' >{name}</p>
                                        <div className="ratings">
                                            <p className='IMDb-rating' >IMDB: {imdb}</p>
                                            <p className='Rotten-rating'>Rotten Tomato: {tomato}</p>
                                        </div>
                                        <p className='seasons'>Seasons:{seasons} , {eps}eps</p>
                                        <p className='animeDesc'>{desc}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }





            </div>
        </>
    )
}

export default Anime
