import { Component } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  ButtonGroup,
  Dropdown,
  Form,
} from "react-bootstrap";

class MyNavbar extends Component {
  state = {
    inputvalue: "",
    isVisible: false,
  };

  render() {
    return (
      <Container fluid className="sticky-top p-0">
        <Row>
          <Col className="p-0">
            <Navbar expand="md" className="bg-dark">
              <Container fluid>
                <Navbar.Brand href="#">
                  <img
                    src="https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png"
                    alt="Logo"
                    width="100"
                    height="45"
                    className="d-inline-block align-text-top"
                  />
                </Navbar.Brand>

                <Navbar.Collapse className="align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        Tv Shows
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        Movies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" aria-disabled="true">
                        Recently Added
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link text-white" aria-disabled="true">
                        My List
                      </a>
                    </li>
                  </ul>
                  <Col md={3} lg={3} className="d-flex, offset-md-4 mt-2">
                    <Form
                      className={this.state.isVisible ? "d-block" : "d-none"}
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Search for movies or TVseries"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      ></Form.Group>
                    </Form>
                  </Col>
                  <i
                    className="bi bi-search me-2 text-white mt-2 ms-2"
                    onClick={() =>
                      this.setState({ isVisible: !this.state.isVisible })
                    }
                  ></i>
                </Navbar.Collapse>
                <Row className=" me-1">
                  <Col className="text-white d-flex flex-row p-0 align-items-center">
                    <p className="navFont text-white mb-0 me-2">KIDS</p>
                    <i className="bi bi-bell-fill me-2"></i>
                  </Col>
                  <Col className="col p-0 drop-start">
                    <div>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1" href="account.html">
                          Account
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="2" href="#">
                          Language
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="3">
                          Notifications
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </div>

                    <img
                      src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                      alt="Logo"
                      width="30"
                      height="30"
                      className="d-inline-block align-text-top dropdown-toggle"
                      as={ButtonGroup}
                      key="start"
                      id={`dropdown-button-drop-start`}
                    />
                  </Col>
                </Row>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyNavbar;
