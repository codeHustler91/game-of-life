import { Link } from "react-router-dom";
import { intro } from "../../../constants/text";
import "./intro.scss";

export const Intro = () => {
  return (
    <div className="basic-container">
      <h1>New Player</h1>
      <p>{intro}</p>
      <Link to="/identify">
        <div className="nav-link intro-link">Step 1: Identify</div>
      </Link>
    </div>
  );
};
