import React from 'react'
import './style.css'
function Anime() {
    return (
        <>
            <div className='animeList'>
                <div className='Anime-Card' >
                    <img className='Anime-img' src="images/Nprofile2.jpg" alt="" />
                    <div className='animecard'>
                        <p className='AnimeHeading' >Naruto</p>
                        <div className="ratings">
                            <p className='IMDb-rating' >IMDB: 9.5</p>
                            <p className='Rotten-rating'>Rotten Tomato: 93%</p>
                        </div>
                        <p className='seasons'>Seasons:4 , 82eps</p>
                        <p className='animeDesc'>Greatest of all Time , one of the best anime every created with incredible
                            story , animation and characters. The story follows the journey of main
                            character Eren who stays beyond the walls and want's to explore the outer
                            world , the reason why he is …..
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Anime
