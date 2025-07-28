import React from 'react';
import './App.css';

const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 }
];


function ListofPlayers({ players }) {
  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((item, index) => (
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>
    </div>
  );
}

function Scorebelow70({ players }) {
  const players70 = players.filter(item => item.score < 70);

  return (
    <div>
      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {players70.map((item, index) => (
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>
    </div>
  );
}

function OddPlayers(props) {
  const [first, , third, , fifth] = props.IndianTeam;

  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

function EvenPlayers(props) {
  const [, second, , fourth, , sixth] = props.IndianTeam;

  return (
    <div>
      <h1>Even Players</h1>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

function ListofIndianPlayers({ players }) {
  return (
    <div>
      <h1>List of Indian Players Merged:</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const flag = false;
  const T20Players=['First Player','Second Player','Third Player'];
  const RanjiTrophyPlayers=['Fourth Player','Fifth Player','Sixth Player'];
  const IndianTeam = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div className="App">
      {flag ? (
        <div>
          <ListofPlayers players={players} /> {/* Pass all 11 players */}
          <hr />
          <Scorebelow70 players={players} /> {/* Pass all 11 players for filtering */}
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <OddPlayers IndianTeam={IndianTeam} /> {/* Pass the merged Indian team array */}
          <hr />
          <EvenPlayers IndianTeam={IndianTeam} /> {/* Pass the merged Indian team array */}
          <hr />
          <ListofIndianPlayers players={IndianTeam} /> {/* Pass the merged Indian team array */}
        </div>
      )}
    </div>
  );
}

export default App;