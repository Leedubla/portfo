import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs" style={{backgroundColor: "#2F4F4F"}}>
      <li className="nav-item" style={{color: "black"}}>
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
          <font color="black"> Home </font>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
         <font color="black"> About </font> 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          <font color="black">Fuel Finder </font>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          <font color="black">Contact</font>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Pass"
          className={location.pathname === "/Pass" ? "nav-link active" : "nav-link"}
        >
          <font color="black">PassWordGen</font>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/runner"
          className={location.pathname === "/runner" ? "nav-link active" : "nav-link"}
        >
          <font color="black">Runner</font>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/port"
          className={location.pathname === "/port" ? "nav-link active" : "nav-link"}
        >
          <font color="black">Portfolio</font>
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
