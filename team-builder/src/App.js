import React, { useEffect, useState } from "react";
import axios from "./axios";
// import logo from "./logo.svg";
import "./App.css";
import TeamMember from "./TeamMember";

// import axios from 'axios'

function App() {
  const [teamMemberList, setTeamMemberList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("fakeai.com")
      .then((res) => {
        console.log(res);
        setTeamMemberList(res.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Oops! We are working on this issue, please come back later!");
      });
  }, []);

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <h1>Team Member Roster</h1>
      {teamMemberList.map((teamMember) => {
        return <TeamMember key={teamMember.id} details={teamMember} />;
      })}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
