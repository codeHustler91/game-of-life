import { Link } from "react-router-dom";
// import { intro } from "../../../constants/text";
import "./execute.scss";

export const Execute = () => {
  return (
    <div className="basic-container">
      <h1>Execute</h1>
      <Link to="/">
        <div className="nav-link intro-link">Step 3: Execute</div>
      </Link>
    </div>
  );
};
