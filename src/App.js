import logo from './logo.svg';
import './App.css';

// TASKS
// 1. Change the background to lime
// 2. Add a new paragraph stating your interest in front-end development
// 3. Change the link text to your github profile name
// 4. Change the link destination to point to your profile 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactyyy 
        </a>
      </header>
    </div>
  );
}

export default App;
