// src/App.js
import React, { useState } from 'react';
import InputForm from './InputForm.js';
import ResultDisplay from './ResultDisplay.js';
import axios from 'axios';
import './App.css';

const App = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [visitedPages, setVisitedPages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (url) => {
    // Set isLoading to true before making the request
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/wikipedia-loop', { url });

      // Update state with the response data
      setRequestCount(response.data.requestCount);
      setVisitedPages(response.data.visitedPages);
      setError(null); // Clear any previous errors

    } catch (error) {
      // Handle errors and update state
      setError('Error processing Wikipedia Loop. Please try again.');
      console.error('Error:', error);
    } finally {
      // Set isLoading to false after the request is complete (success or error)
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className='h1-container'>Wikipedia Loop</h1>
      <InputForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ResultDisplay requestCount={requestCount} visitedPages={visitedPages} />
    </div>
  );
};

export default App;
