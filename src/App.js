import "./App.css";
import { Nav } from "./components/Nav/index";
import { HeroCard } from "./components/HeroCard/index";
import { About } from "./components/About/index";
import { Skills } from "./components/Skills/index";
import { Projects } from "./components/Projects/index";
import { Footer } from "./components/Footer/index";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <HeroCard />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
