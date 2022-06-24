import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam"/>
        <footer>
        This project was coded by Fanny Nordberg and is{" "} 
          <a 
            href="https//:github.com/Fannytje/my-react-weather-app" 
            target="_blank" 
            rel="noreferrer noopener">open-sourced on Github</a> and{" "}
          <a
            href="https://bucolic-sfogliatella-655015.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
} 


