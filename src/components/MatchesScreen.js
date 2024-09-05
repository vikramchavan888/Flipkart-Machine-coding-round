import React from 'react';
import { useParams } from 'react-router-dom';
import './MatchesScreen.css'; 

const MatchesScreen = ({ matches }) => {
  const { playerId } = useParams();
  
  const playerMatches = matches.filter(match => 
    match.player1.id === playerId || match.player2.id === playerId
  );

  return (
    <div className="matches-screen">
      <h1>Match Details</h1>
      <table>
        <thead>
          <tr>
            <th>Opponent</th>
            <th>Score</th>
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          {playerMatches.map((match, index) => {
            const isPlayer1 = match.player1.id === playerId;
            const outcome = isPlayer1
              ? match.player1.score > match.player2.score
                ? 'Win'
                : match.player1.score < match.player2.score
                ? 'Loss'
                : 'Draw'
              : match.player2.score > match.player1.score
              ? 'Win'
              : match.player2.score < match.player1.score
              ? 'Loss'
              : 'Draw';

            return (
              <tr key={index} style={{ backgroundColor: outcome === 'Win' ? 'green' : outcome === 'Loss' ? 'red' : 'white' }}>
                <td>{isPlayer1 ? match.player2.name : match.player1.name}</td>
                <td>{isPlayer1 ? `${match.player1.score} - ${match.player2.score}` : `${match.player2.score} - ${match.player1.score}`}</td>
                <td>{outcome}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesScreen;
