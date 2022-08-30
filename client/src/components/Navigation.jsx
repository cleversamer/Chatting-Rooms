import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "store/user";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import cookie from "services/cookie";
import config from "config.json";

const routes = config.routes.client;

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    cookie.remove();
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <LinkContainer to={routes.home}>
            <img className="logo" src="/assets/icons/icon.png" alt="logo" />
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <LinkContainer to={routes.login}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            {!user && (
              <LinkContainer to={routes.register}>
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <LinkContainer to={routes.chat}>
                <Nav.Link>Chat</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <LinkContainer to={routes.home}>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </LinkContainer>
                {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
