import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Meme Generator
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
