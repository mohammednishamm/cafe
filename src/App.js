import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Second from './component/Second';
import Third from './component/Third';
import Fourth from './component/Fourth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

     
        <Navbar/>
        <Second/>
        <Third/>
       <Fourth/>


   
  

    </div>
  )
}

export default App;
