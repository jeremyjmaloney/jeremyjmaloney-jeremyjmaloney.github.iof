import "./App.css";
import { Nav } from "./components/Nav/index";
import { HeroCard } from "./components/HeroCard/index";
import headshot from "./images/headshot.jpeg";
import handshake from "./images/handshake.jpg";
import Carousel from "./components/Carousel/index";
import articles from "./data/articles";

function App() {
  return (
    <div className="App h-screen w-screen overflow-scroll">
      <Nav />
      <main id="home" className="flex flex-col mx-10 my-10">
        <HeroCard
          image={headshot}
          imageWidth="w-80"
          primaryText="Front End Developer to enrich your online business"
          hasCta
          ctaText="Get to know me"
          href="#getToKnowMe"
          margin="m-40"
        />
        <HeroCard
          isRow
          image={handshake}
          imageWidth="w-80"
          secondaryText="My goal is to grow as both a developer and a leader who uplifts others, fosters curiosity and collaboration, and build the best quality product for the customer that also meets the needs of the business."
          ctaText="Get to know me"
          id="getToKnowMe"
          bgColor="bg-yellow-300"
          padding="px-20 py-40"
        />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <Carousel articles={articles} interval={5000} />
        </div>
      </main>
    </div>
  );
}

export default App;
