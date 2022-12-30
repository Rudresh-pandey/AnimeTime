import './App.css';
import Anime from './components/Anime';
import Navbar from './components/Navbar';
import DemoData from './components/DemoData';
import { useState } from 'react';

function App() {

  const [animeData, setAnimeData] = useState(DemoData);

  const [searchInput, SetSearchInput] = useState("");

  const findAnime = (e) => {
    // e.preventDefault();
    SetSearchInput(e.target.value);
    if (searchInput.length === 0) {
      setAnimeData(DemoData);
      return;
    }
    const SearchedAnime = DemoData.filter((ele) => {
      return ele.name.match(searchInput);
    })
    setAnimeData(SearchedAnime);
  }

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
      <Navbar filterAnime={filterAnime} findAnime={findAnime} searchInput={searchInput} />
      <Anime DemoData={animeData} />
    </>
  );
}

export default App;
