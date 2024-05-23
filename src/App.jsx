// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={`container`}>
        <h1 className={`app-title`}><span><img src="./favicon.png" className={`logo`} /></span>Virtual Travel Guide</h1>
        <p className={`text-center`}>Hey there! Ready to plan your dream getaway? Just fill in the form below with your preferences, and we'll whip up some awesome vacation suggestions just for you!</p>
        <form action="">
          <div className={`form-group`}>
              <label htmlFor="">Destination Preferences</label>
              <input type="text" autoFocus />
              <small>Choose your preferred destination type(s).</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="">Travel Interests</label>
              <input type="text" />
              <small>Select your interests for the trip. Separate by commas.</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="">Budget</label>
              <input type="text" />
              <small>Specify your trip budget range.</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="">Travel Dates</label>
              <input type="text" />
              <small>Pick your start and end dates.</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="">Period in Days</label>
              <input type="text" />
              <small>Enter the duration of your trip.</small>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
