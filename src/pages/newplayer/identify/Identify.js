import { Link } from "react-router-dom";
import { useState } from "react";
// import { intro } from "../../../constants/text";
import "./identify.scss";

export const Identify = () => {
  const [games, setGames] = useState(["Work", "Family", "Leader", "Social Media", "Friend"]);
  const [input, setInput] = useState("");

  const addGame = () => {
    setGames([...games, input]);
    setInput("");
  }

  return (
    <div className="basic-container identify">
      <h1>Identify</h1>
      <p>Think about your life and identify of all the different games you're involved in. </p>
      <p>Questions to ask yourself to help discover games you aren't aware of: </p>
      <p>(insert questions here)</p>
      <p>Some of the most played games are: Work, family, leader, social media, friend, romantic, spiritual, health, sleep, etc</p>
      <ul>
        {games.map((game, idx) => <li key={idx}>{game}</li>)}
      </ul>
      <p>Input: {input}</p>
      <input type="text" placeholder="type your games..." name="identify" 
        value={input} onChange={(e) => setInput(e.target.value)}>
      </input>
      <button type="submit" onClick={addGame}>Add Game</button>
      <p>Once you have identified the games you are playing, you can begin to prioritize them.</p>
      <Link to={{pathname: "/prioritize", state: { games }}}>
        <div className="nav-link intro-link">Step 2: Prioritize</div>
      </Link>
    </div>
  );
};
