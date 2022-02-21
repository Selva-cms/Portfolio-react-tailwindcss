
import './App.css';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App scroll-smooth">
     <Nav />
     <Hero />
     <About/>
     <Work/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
