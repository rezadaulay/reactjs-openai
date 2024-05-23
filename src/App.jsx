import { useState } from 'react';
import axios from 'axios';
import TravelGuideResult from './components/TravelGuideSuggestion';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination_preferences: '',
    travel_interests: '',
    min_budget: '',
    max_budget: '',
    start_travel_date: '',
    end_travel_date: '',
    period_in_days: ''
  });
  const [travelSuggestion, setTravelSuggestion] = useState(null);

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
    setTravelSuggestion(null);
    setIsLoading(true);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_API_URL}travel-guide`, {
        destination_preferences: formData.destination_preferences,
        travel_interests: formData.travel_interests.join(','),
        min_budget: formData.min_budget,
        max_budget: formData.max_budget,
        travel_dates: formData.start_travel_date + '-' + formData.end_travel_date,
        period_in_days: formData.period_in_days
      });
      setTravelSuggestion(data.answer)
    } catch (error) {
      console.log('error', error)
    }
    setIsLoading(false);
  };

  return (
    <>
      <TravelGuideResult content={travelSuggestion}/>
      <div className={`container`}>
        <h1 className={`app-title`}><span><img src="./favicon.png" className={`logo`} /></span>Virtual Travel Guide</h1>
        <p className={`text-center`}>Hey there! Ready to plan your dream getaway? Just fill in the form below with your preferences, and we'll whip up some awesome vacation suggestions just for you!</p>
        <form onSubmit={handleSubmit}>
          <div className={`form-group`}>
              <label htmlFor="destination_preferences">Destination Preferences</label>
              <input type="text" name="destination_preferences" required onChange={handleInputChange}/>
              <small>Enter places, cities, countries, or types (e.g., beach, mountains) you're interested in. Separate multiple entries with commas.</small>
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
                <input type="date" name="start_travel_date" required onChange={handleInputChange}/>
                <input type="date" name="end_travel_date" required onChange={handleInputChange}/>
              </div>
              <small>Enter the dates you plan to travel between.</small>
          </div>
          <div className={`form-group`}>
              <label htmlFor="period_in_days">Period in Days</label>
              <input type="number" name="period_in_days" required onChange={handleInputChange}/>
              <small>Enter the duration of your trip.</small>
          </div>
          <button disabled={isLoading}>{isLoading ? 'Loading ...' : 'Submit'}</button>
        </form>
      </div>
    </>
  )
}

export default App
