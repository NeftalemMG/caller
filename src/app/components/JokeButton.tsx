'use client';

import { useState } from 'react';

const JokeButton = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jokerandomizer-pdor40fpi-yoboinef-2000s-projects.vercel.app/api/laughs');
      const data = await response.json();
      setJoke(data.theJoke);
    } catch {
      setJoke('Failed to fetch a joke.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={fetchJoke}
        disabled={loading}
        className="bg-white border border-gray-200 rounded-md shadow-sm text-gray-800 font-semibold py-2 px-4 transition-transform transform hover:translate-y-[-1px] hover:shadow-md disabled:cursor-not-allowed disabled:bg-gray-100"
        style={{
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Get a Random Joke'}
      </button>
      {joke && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f7f7f7',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '18px',
          }}
        >
          <p style={{ color: '#333' }}>{joke}</p>
        </div>
      )}
    </div>
  );
};

export default JokeButton;