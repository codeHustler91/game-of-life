import { Link, useLocation } from "react-router-dom";
// import { intro } from "../../../constants/text";
import "./prioritize.scss";

export const Prioritize = (props) => {
  // const { games } = props.location.state;
  const location = useLocation();
  const games = location.state;

  // if (state) {
  //   games = state.games;
  let gamesList = games.map((game, idx) => <li key={idx}>{game}</li>);
  // }

  return (
    <div className="basic-container">
      <h1>Prioritize</h1>
      <p>Now let's prioritize these games so you can focus on what matters most</p>
      {games ? <ul>{gamesList}</ul> : <p>Please go back and enter some games</p>}
      <Link to="/execute">
        <div className="nav-link intro-link">Step 3: Execute</div>
      </Link>
    </div>
  );
};
