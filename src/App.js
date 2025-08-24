import './App.css';
import { Nav } from './components/Nav/index';
import { HeroCard} from './components/HeroCard/index';
import headshot from './images/headshot.jpeg';

function App() {
  return (
    <div className="App h-screen w-screen overflow-scroll">
      <Nav />
      <main id="home" className='flex flex-col mx-10 my-10'>
        <HeroCard 
          image={headshot}
          primaryText="Front End Developer to enrich your online business"
          hasCta
          ctaText="Get to know me"
          href="#getToKnowMe"
          margin="m-40"
        />
        <HeroCard 
          isRow
          image={headshot}
          secondaryText='My goal is to grow as both a developer and a leader who uplifts others, fosters curiosity and collaboration, and build the best quality product for the customer that also meets the needs of the business.'
          ctaText="Get to know me"
          id="getToKnowMe"
          bgColor="bg-yellow-300"
          padding="px-20 py-40"
        />
      </main>
    </div>
  );
}

export default App;
