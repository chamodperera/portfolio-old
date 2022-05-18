import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className='content'>
        <ContactMe/>
      </div>
      
    </div>
  );
}

export default App;
