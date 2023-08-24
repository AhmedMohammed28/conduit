import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/editor">
                {" "}
                <i className="ion-compose"></i>&nbsp;New Article{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/settings">
                {" "}
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/profile/eric-simons">
                <Image
                  src=""
                  className="user-pic"
                  alt="profile picture"
                  width={50}
                  height={50}
                />
                Eric Simons
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/register">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
