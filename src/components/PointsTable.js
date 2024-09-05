import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PointsTable.css'; // Importing CSS file for this component

const PointsTable = ({ players }) => {
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortedPlayers, setSortedPlayers] = useState([...players]);

  useEffect(() => {
    sortPlayers();
  }, [players, sortOrder]);

  const sortPlayers = () => {
    const sorted = [...players].sort((a, b) => {
      if (a.points === b.points) {
        return sortOrder === 'desc'
          ? b.totalScore - a.totalScore
          : a.totalScore - b.totalScore;
      }
      return sortOrder === 'desc' ? b.points - a.points : a.points - b.points;
    });
    setSortedPlayers(sorted);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="points-table">
      <h1>Points Table</h1>
      <button onClick={handleSortChange}>
        Sort {sortOrder === 'desc' ? 'Ascending' : 'Descending'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Points</th>
            <th>Total Score</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.points}</td>
              <td>{player.totalScore}</td>
              <td>
                <Link to={`/matches/${player.id}`}>View Matches</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
