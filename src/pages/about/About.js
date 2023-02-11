import { about } from "../../constants/text";
import "./about.scss";
// import "../../index.scss";

export const About = () => {
  return (
    <div className="basic-container">
      <h1>About</h1>
      <p>{about}</p>
    </div>
  );
};
