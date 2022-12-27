import './App.css';
import Anime from './components/Anime';
import Navbar from './components/Navbar';
import DemoData from './components/DemoData';

function App() {
  return (
    <>
      <Navbar />
      <Anime DemoData={DemoData} />
    </>
  );
}

export default App;
