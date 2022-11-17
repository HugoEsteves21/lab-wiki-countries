import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
    <NavBar />
    <CountryList countriesData={countriesData} />
    {/* <Routes>
      <Route element={<CountryList countriesData={countriesData} />}/>

      <Route element={<CountryDetails/>}/>
      
    </Routes>   */}
    </div>
  );
}

export default App;
