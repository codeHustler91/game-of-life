import { Link } from "react-router-dom";
import "./signin.scss";

export const SignIn = () => {
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <div className="text-input">
        <label for="username">Username: </label>
        <input type="text" name="username" required />
      </div>
      <div className="text-input">
        <label for="password">Password: </label>
        <input type="password" name="password" required />
      </div>
      <Link to="/">
        <button>Sign In</button>
      </Link>
    </div>
    );
};