import { Outlet, Link } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="/signin">
          <div className="nav-link">Sign In</div>
        </Link>
        <Link to="/about">
          <div className="nav-link">About</div>
        </Link>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;