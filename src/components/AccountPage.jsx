import { Component } from "react";
import { Form, Col, Row, Dropdown, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class AccountPage extends Component {
  render() {
    return (
      <div>
        <Container fluid className="p-0 sticky-top">
          <Row>
            <Col className="p-0">
              <Navbar expand="md" className="bg-black">
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
                      <Link className="nav-item" as="li" to="/">
                        <a className="nav-link active text-white">Home</a>
                      </Link>
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
                    <Col md={3} lg={4} className="d-flex, offset-md-2 mt-2">
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Search for movies or TVseries"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        ></Form.Group>
                      </Form>
                    </Col>
                  </Navbar.Collapse>
                  <Row className=" me-1">
                    <Col className="text-white d-flex flex-row p-0 align-items-center">
                      <p className="navFont text-white mb-0 me-2">KIDS</p>
                      <i className="bi bi-bell-fill me-2"></i>
                    </Col>
                    <Col className="p-0">
                      <Dropdown drop="start">
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="1">Account</Dropdown.Item>
                          <Dropdown.Item eventKey="2" href="#">
                            Language
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Notifications
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Toggle
                          as={"CustomToggle"}
                          id="dropdown-custom-toggle"
                        >
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top"
                          />
                        </Dropdown.Toggle>
                      </Dropdown>
                    </Col>
                  </Row>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <main>
          <div className="container-fluid w-75">
            <h1>Account</h1>
            <hr />
            <div className="row justify-content-between">
              <div className="col-3">
                <h3 className="accounttext">MEMBERSHIP & BILLING</h3>
                <button className="btn accountButton footFont rounded-0 pe-4 ps-4">
                  Cancel Membership
                </button>
              </div>
              <div className="col-4 flex-grow-1">
                <ul className="list-unstyled">
                  <li className="fw-bold navFont">student@strive.school</li>
                  <li className="accounttext navFont">Password: ********</li>
                  <li className="accounttext navFont">Phone: 321 044 1279</li>
                </ul>
              </div>
              <div className="col-4 text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Change account email</li>
                  <li className="ulColor navFont">Change Password</li>
                  <li className="ulColor navFont">Change Phone Number</li>
                </ul>
              </div>
            </div>
            <hr className="w-75 ms-auto mb-1 mt-1" />
            <div className="row justify-content-end p-0">
              <div className="col-4">
                <ul className="list-unstyled">
                  <li className="fw-bold navFont">
                    <i className="bi bi-paypal navFont me-2">Paypal</i>
                    admin@strive.school
                  </li>
                </ul>
              </div>
              <div className="col-5 text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Update payment info</li>
                  <li className="ulColor navFont">Billing details</li>
                </ul>
              </div>
            </div>
            <hr className="w-75 ms-auto mb-1 mt-1" />
            <div className="row justify-content-between">
              <div className="col text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">
                    Redeem gift cards or promo code
                  </li>
                  <li className="ulColor navFont">Where to buy gift cards</li>
                </ul>
              </div>
            </div>
            <hr className="ms-auto mb-1 mt-1" />
            <div className="row justify-content-between align-items-center">
              <div className="col-3">
                <h3 className="accounttext">PLAN DETAILS</h3>
              </div>
              <div className="col-4 flex-grow-1 flex-row d-flex align-items-center">
                <h2 className="navFont mb-0">Premium</h2>
                <img
                  src="assets/media/Screenshot 2023-10-06 145710.png"
                  width="80"
                  height="25"
                />
              </div>
              <div className="col-4 text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Change plan</li>
                </ul>
              </div>
            </div>
            <hr className="ms-auto mb-1 mt-1" />
            <div className="row justify-content-between">
              <div className="col-3">
                <h3 className="accounttext">SETTINGS</h3>
              </div>
              <div className="col-4 text-start flex-grow-1">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Parental controls</li>
                  <li className="ulColor navFont">Test participation</li>
                  <li className="ulColor navFont">Manage download devices</li>
                  <li className="ulColor navFont">Activate devices</li>
                  <li className="ulColor navFont">
                    Recent device streaming activity
                  </li>
                  <li className="ulColor navFont">Sign out of all devices</li>
                </ul>
              </div>
            </div>
            <hr className="ms-auto mb-1 mt-1" />
            <div className="row justify-content-between">
              <div className="col-3">
                <h3 className="accounttext">MY PROFILE</h3>
              </div>

              <div className="col d-flex flex-row align-items-start mt-1">
                <img
                  src="assets/avatar.png"
                  width="25"
                  className="rounded-circle me-1"
                />
                <h2 className="navFont mt-1 mb-0">
                  <a
                    href="edit_account.html"
                    className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
                  >
                    Strive Student
                  </a>
                </h2>
              </div>
              <div className="col text-end">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Parental controls</li>
                  <li className="ulColor navFont">Test participation</li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-4 offset-3">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Language</li>
                  <li className="ulColor navFont">Playback settings</li>
                  <li className="ulColor navFont">Subtitle appearance</li>
                </ul>
              </div>
              <div className="col-4 text-start flex-grow-1">
                <ul className="list-unstyled">
                  <li className="ulColor navFont">Viewing activity</li>
                  <li className="ulColor navFont">ratings</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AccountPage;
