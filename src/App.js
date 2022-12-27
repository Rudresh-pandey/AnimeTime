import './App.css';
import Anime from './components/Anime';
import Navbar from './components/Navbar';
import DemoData from './components/DemoData';
import { useState } from 'react';

function App() {

  const [animeData, setAnimeData] = useState(DemoData);

  const filterAnime = (category) => {
    if (category === "All") {
      setAnimeData(DemoData);
      return;
    }

    const updatedAnimeList = DemoData.filter((currEle) => {
      return currEle.category === category;
    });

    setAnimeData(updatedAnimeList);
  }

  return (
    <>
      <Navbar filterAnime={filterAnime} />
      <Anime DemoData={animeData} />
    </>
  );
}

export default App;
