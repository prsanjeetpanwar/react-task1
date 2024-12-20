import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



const countries = [
  { name: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
  { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "Germany", cities: ["Berlin", "Munich", "Hamburg"] }
];





function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [availableCity,setAvailableCity]=useState([]);
  const [selectedCity,setSelectedCiy]=useState("");

 const handleCountryChange=(e)=>{
  const countryName=e.target.value;
  setSelectedCountry(countryName);


  const country=countries.find((country)=>country.name===countryName)
  setAvailableCity(country?country.cities:[])
  setSelectedCiy('')
  

 }

 const handleCityChange = (e) => {
  setSelectedCiy(e.target.value);
  
};



 


  return (
    <div className="App">
      <>
       <label>Select the Country</label>
       <select name="" id="" value={selectedCountry} onChange={handleCountryChange}>
         
         {countries.map((country)=>(
          
          <option id={country.name} value={country.name}>
            {country.name}</option>
         ))}
         {/* {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))} */}
       </select>

       {selectedCountry && (
        <>
        <label>Select the City</label>
        <select name="" id="" value={selectedCity} onChange={handleCityChange}>
          {availableCity.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        </>
       )}
       {
        selectedCity && (
          <>
          {selectedCity}</>
        )
       }
  
      </>
    </div>
  );
}

export default App;
