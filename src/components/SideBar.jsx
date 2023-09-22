import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { searchFetch, setSearchFilter, setSearchSongs } from "../redux/actions";

const SideBar = () => {
  const searchFilter = useSelector(state => state.search.searchFilter);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-3 pt-4"
        id="sidebar">
        <div className="nav-container">
          <Navbar.Brand className="navbar-brand" href="index.html">
            <img src="assets/img/logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <Navbar.Collapse className="collapse navbar-collapse mt-4" id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <NavLink className="nav-item nav-link" to="/">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item nav-link" to="/">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                  </NavLink>
                </li>
                <li>
                  <InputGroup className="input-group mt-3">
                    <Form.Control
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      value={searchFilter}
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={e => dispatch(setSearchFilter(e.target.value))}
                    />
                    <div className="input-group-append" style={{ marginbottom: `4%` }}>
                      <Button
                        variant="outline-secondary"
                        className="btn btn-outline-secondary "
                        type="button"
                        id="button-addon1"
                        onClick={() => dispatch(searchFetch(searchFilter))}>
                        GO
                      </Button>
                    </div>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <Link to="/">Cookie Policy</Link> |<Link to="/"> Privacy</Link>
        </div>
      </Navbar>
    </>
  );
};
export default SideBar;
