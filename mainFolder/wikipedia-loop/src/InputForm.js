// src/components/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <div className="input-card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter Wikipedia URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
