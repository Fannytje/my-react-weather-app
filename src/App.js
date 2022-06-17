import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1> 
        <Weather defaultCity="Paris"/>
        <footer>
        This project was coded by Fanny and is <a href="https//:github.com/Fannytje/my-react-weather-app" target="_blank">open-sourced on Github.</a>
        </footer>
      </div>
    </div>
  );
} 


