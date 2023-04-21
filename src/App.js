import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BuildBase from "./components/BuildBase/Build";
import BestCoffee from "./components/BestCoffee/Best";
import DataSlider from "./components/DataSlider/Data";
import Client from './components/Client/Client';
import Coffeedespina from './components/Coffeedespina/Coffeedespina';
import Footer from './components/Footer/Footer';
import Burger from './components/Burger/Burger';
import Loading from './components/Loading/Loading';
import LOK from "./components/Discovery/Discovery";
function App() {
  return (
    <div className="App">  
    {/* <Loading/> */}
      <Burger/>
      <Hero/> 
      <Card/>
      <LOK/>
      <BuildBase/>
      <BestCoffee/>
      <DataSlider/>
       <Client/> 
      <Coffeedespina/>   
       <Footer/>
    </div>
  );
}

export default App;
