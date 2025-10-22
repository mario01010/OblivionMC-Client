import Header from "./components/header/header";
import './styles/root.css';
import './styles/global.css';
import Hero from "./components/hero/hero";
import Particle from "./components/particles/particles";
import Slider from "./components/slider/slider";

function App() {

  return (
    <>
    <Particle />
      <Header />
      <Hero />
      <Slider />
      <br />
    </>
  )
}

export default App
