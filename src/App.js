import Nav from './components/Nav'
import Intro from './components/Intro'
import Menu from './components/Menu'
import Cv from './components/Cv'
import Projects from './components/Projects'
import VideoGames from './components/VideoGames'
import Footer from './components/Footer'

import './Portfolio.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Menu />
      <Cv />
      <Projects />
      <VideoGames />
      <Footer />
    </div>
  );
}

export default App;
