import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className='content'>
        <section id='AboutMe'><AboutMe/></section>
        <section id='Skills'><Skills/></section>
        <section id='Projects'><Projects/></section>
        <section id='Contacts'><ContactMe/></section>
        
        
        
      </div>
      <div className="waves">
      <svg  viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-500"><path d="M 0,600 C 0,600 0,300 0,300 C 74.47846889952152,350.6507177033493 148.95693779904303,401.30143540669854 235,381 C 321.04306220095697,360.69856459330146 418.6507177033493,269.444976076555 530,244 C 641.3492822966507,218.555023923445 766.4401913875599,258.9186602870813 863,304 C 959.5598086124401,349.0813397129187 1027.5885167464114,398.88038277511964 1119,399 C 1210.4114832535886,399.11961722488036 1325.2057416267944,349.5598086124402 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" fill="#033A40" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </div>     
    </div>
  );
}

export default App;
