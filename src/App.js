import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App scrollspy-example bg-light p-3 rounded-2" data-bs-spy="scroll" data-bs-target="#main-nav" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
