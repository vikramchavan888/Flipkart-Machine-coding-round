import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PointsTable from './components/PointsTable';
import MatchesScreen from './components/MatchesScreen';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {

     /* this is orignal function */

    // const fetchData = async () => {
    //   try {
    //     const playersResponse = await axios.get('https://jsonkeeper.com/b/IKQQ');
    //     const matchesResponse = await axios.get('https://jsonkeeper.com/b/JNYL');
    //     setPlayers(playersResponse.data);
    //     setMatches(matchesResponse.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     setError('Failed to fetch data. Please check your network connection or try again later.');
    //   }
    // };




    // I Mock data to show code is properly working
    
    const fetchData = async () => {
      try {
        
        const mockPlayers = [
          { id: '1', name: 'Player 1', points: 100, totalScore: 300 },
          { id: '2', name: 'Player 2', points: 80, totalScore: 250 }

          
        ];
        const mockMatches = [
          { player1: { id: '1', name: 'Player 1', score: 10 }, player2: { id: '2', name: 'Player 2', score: 5 } },
          { player1: { id: '2', name: 'Player 2', score: 15 }, player2: { id: '1', name: 'Player 1', score: 20 } },
          
        ];
        
        // Simulate setting state with mock data
        setPlayers(mockPlayers);
        setMatches(mockMatches);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please check your network connection or try again later.');
      }
    };




    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PointsTable players={players} />} />
        <Route path="/matches/:playerId" element={<MatchesScreen matches={matches} />} />
      </Routes>
    </Router>
  );
};

export default App;
