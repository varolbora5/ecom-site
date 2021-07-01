function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
        <div className="container">
          <a className="navbar-brand" href="/#">
            Company Name
          </a>
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
            className="navbar-toggler"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle nav-link"
                  href="/#"
                >
                  Account
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/#">
                    Log In
                  </a>
                  <a className="dropdown-item" href="/#">
                    Sign Up
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
