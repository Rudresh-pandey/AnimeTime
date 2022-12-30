import './App.css';
import Anime from './components/Anime';
import Navbar from './components/Navbar';
import DemoData from './components/DemoData';
import { useState } from 'react';

function App() {

  const [animeData, setAnimeData] = useState(DemoData);

  const [searchInput, SetSearchInput] = useState("");

  const findAnime = (e) => {

    SetSearchInput(e.target.value);
    if (searchInput.length > 0) {
      // console.log(searchInput.length);
      // setAnimeData(DemoData);
      // return;
      const SearchedAnime = DemoData.filter((ele) => {
        const DataName = ele.name.toLowerCase();
        return DataName.match(searchInput.toLowerCase());
      })
      setAnimeData(SearchedAnime);
    }

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
