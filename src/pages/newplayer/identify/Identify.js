import { Link } from "react-router-dom";
// import { intro } from "../../../constants/text";
import "./identify.scss";

export const Identify = () => {
  return (
    <div className="basic-container">
      <h1>Identify the games you are playing</h1>
      <p>Think about your life and identify of all the different games you involved in. </p>
      <p>Questions to ask yourself to help discover games you aren't aware of: </p>
      <p>(insert questions here)</p>
      <p>Some of the most played games are: Work, family, leader, social media, friend, romantic, spiritual, health, sleep, etc</p>
      <input type="text" placeholder="type your games..." name="identify"></input>
      <p>Once you have identified the games you are playing, you can begin to prioritize them.</p>
      <Link to="/prioritize">
        <div className="nav-link intro-link">Step 2: Prioritize</div>
      </Link>
    </div>
  );
};
