import "./App.css";
import { Nav } from "./components/Nav/index";
import { HeroCard } from "./components/HeroCard/index";
import { About } from "./components/About/index";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <HeroCard />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
