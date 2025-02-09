import logo from './logo.svg'; //jpg,jpeg, png, gif, bitmap, svg
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [value, setValue] = useState(0)
  // const [condition, setCondition] = useState("good")
  const [preferredDefaultValue, setPreferredDefaultValue] = useState(value)

  //collect the user's preferred initial state
  //set the initial state to memory
  //anytime you restart the app, it should fetch the initial state from memory

  useEffect(() => {
    
    const savedPreferredDefaultValue = sessionStorage.getItem("savedPreferredDefaultValue")

    if(savedPreferredDefaultValue){
      setValue(Number(savedPreferredDefaultValue))
    }

    if(savedPreferredDefaultValue){
      setPreferredDefaultValue(Number(savedPreferredDefaultValue))
    }

  }, [])
  

  return (
    <div className='app'>
      <div style={{color:"white"}}>
        preferred default value changes : {preferredDefaultValue}
      </div>
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
          <form>
            <div>
              <label 
              className="initial-state-input-box-label"
              htmlFor='initial-state-input-box'>Default value: </label>

              <input
              className='initial-state-input-box'
              id='initial-state-input-box'
              type="number"
              placeholder='choose your initial number'
              defaultValue={sessionStorage.getItem("savedPreferredDefaultValue")}
              max={100} //not reliable at all
              min={0} //not reliable at at all
              onChange={(event)=>{
                // return event.target.value
                const currentValueOfTheInputBox = event.target.value;

                setPreferredDefaultValue(currentValueOfTheInputBox);
              }}              
              />

              <button 
              onClick={(event)=>{
                event.preventDefault();

                const currentValue = preferredDefaultValue;
                
                //lets save the value to session or local storage
                //we shall use session storage

                sessionStorage.setItem("savedPreferredDefaultValue", currentValue )
                alert("you have saved it")
                //caution, change to dialog
                // sessionStorage.getItem("savedPreferredDefaultValue")
              }} >Set</button>
            </div>
          </form>
          <div>
            <button
            onClick={()=>{
              setValue(prev => {
                // return prev-prev
                return 0
              })
            }}>
              reset
            </button>
          </div>
      </section>
      
    </div>
  );
}

export default App;
