import logo from './logo.svg'; //jpg,jpeg, png, gif, bitmap, svg
import './App.css';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState(0)
  // const [condition, setCondition] = useState("good")

  //collect the user's preferred initial state
  //set the initial state to memory
  //anytime you restart the app, it should fetch the initial state from memory

  return (
    <div className='app'>
      <header className='app-header'>
        <span> This is a sample app that shows us how to do basic operations in React.js  </span>
      </header>
      <section className='display-value-container'>
        <div className='display-value'>
          {value}
        </div>
        <div className='mathematical-buttons'>
          <button 
          className='subtract-button'
          onClick={()=>{
            setValue(prev => {
              return prev - 1
            })
          }}
          >-</button>
          {/* <div>sample div</div> */}
          <button 
          className='add-button' 
          onClick={()=>{
            setValue(previo => {
              return previo + 1
            })
          }}
          >+</button>
        </div>
        {/* <SchoolList state={}  setSchoolList/> */}
      </section>
      <section className='initial-state-collector-container'>
          {/* <label htmlFor=''></label> */}
          <input
          className='initial-state-input-box' 
          type="number" 
          placeholder='choose your initial number'/>
          <button  >Ok</button>
      </section>
      
    </div>
  );
}

export default App;
