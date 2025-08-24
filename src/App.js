import './App.css';
import { Nav } from './components/Nav/index';
import profilePicture from ".//images/JJMProfile.jpeg";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main-container flex h-screen w-screen'>
        <div className='flex flex-col items-center h-fit m-40'>
          <img src={profilePicture} className="rounded-2xl w-60 grayscale hover:blur-sm" alt='profile headshot'></img>
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-stone-600 sm:text-7xl m-10">Front End Developer to <br />enrich your online business</h1>
          <a href="#getToKnowMe" className="rounded-md bg-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get to know me</a>
        </div>
      </div>
    </div>
  );
}

export default App;
