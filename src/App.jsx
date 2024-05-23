import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    destination_preferences: '',
    travel_interests: '',
    min_budget: '',
    max_budget: '',
    start_travel_dates: '',
    end_travel_dates: '',
    period_in_days: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultipleSelectChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
  };

  return (
    <>
      <div className={`container`}>
        <h1 className={`app-title`}><span><img src="./favicon.png" className={`logo`} /></span>Virtual Travel Guide</h1>
        <p className={`text-center`}>Hey there! Ready to plan your dream getaway? Just fill in the form below with your preferences, and we'll whip up some awesome vacation suggestions just for you!</p>
        <form onSubmit={handleSubmit}>
          <div className={`form-group`}>
              <label htmlFor="destination_preferences">Destination Preferences</label>
              <select name="destination_preferences" required multiple onChange={handleMultipleSelectChange}>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="north america">North America</option>
                <option value="south america">South America</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
                <option value="antarctica">Antarctica</option>
              </select>
              <small>Choose your preferred destination type(s).</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="travel_interests">Travel Interests</label>
              <select name="travel_interests" required multiple onChange={handleMultipleSelectChange}>
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="cultural experiences">Cultural Experiences</option>
                <option value="food and dining">Food & Dining</option>
                <option value="spiritual">Spiritual</option>
              </select>
              <small>Select your interests for the trip.</small>
          </div>
          <div className={`form-group`}>
              <label>Budget (USD)</label>
              <div className={`multiple-inputs`}>
                <input type="number" name="min_budget" required onChange={handleInputChange}/>
                <input type="number" name="max_budget" required onChange={handleInputChange}/>
              </div>
              <small>Specify your trip budget range.</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="">Travel Dates</label>
              <div className={`multiple-inputs`}>
                <input type="date" name="start_travel_dates" required onChange={handleInputChange}/>
                <input type="date" name="end_travel_dates" required onChange={handleInputChange}/>
              </div>
              <small>Enter the dates you plan to travel between.</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="period_in_days">Period in Days</label>
              <input type="number" name="period_in_days" required onChange={handleInputChange}/>
              <small>Enter the duration of your trip.</small>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
