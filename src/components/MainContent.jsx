import React, { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

class MainContent extends Component {
  state = {
    Search1: [],
    Search2: [],
    Search3: [],
    Search4: [],
    Search5: [],
    isLoading: true,
  };

  getMovies = (searchIndex, StateName) => {
    fetch(`http://www.omdbapi.com/?apikey=556b8878&s=${searchIndex}`)
      .then((res) => {
        if (res.ok) {
          console.log("res ok!", res);
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          [StateName]: data.Search.map((movie) => ({
            Title: movie.Title,
            Year: movie.Year,
            imdbID: movie.imdbID,
            Type: movie.Type,
            Poster: movie.Poster,
          })),
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err, "errore");
      });
  };

  componentDidMount() {
    this.getMovies("The%20lord", "Search1");
    this.getMovies("harry%20potter", "Search2");
    this.getMovies("batman", "Search3");
    this.getMovies("avengers", "Search4");
    this.getMovies("game%20of%20thrones", "Search5");
  }

  render() {
    return (
      <main>
        <Container fluid className="mt-3">
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Based on your activity</h1>

          <Row className="movie-row">
            {this.state.Search1.map((movie, index) => (
              <Col key={index} lg={2} md={3} xs={6} className="movie-column">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                />
                <p className="text-white">{movie.Title}</p>
              </Col>
            ))}
          </Row>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Rewatch Harry Potter</h1>
          <Row className="movie-row">
            {this.state.Search2.map((movie, index) => (
              <Col key={index} lg={2} md={3} xs={6} className="movie-column">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                />
                <p className="text-white">{movie.Title}</p>
              </Col>
            ))}
          </Row>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Suggested by Netflix</h1>
          <Row className="movie-row">
            {this.state.Search3.map((movie, index) => (
              <Col key={index} lg={2} md={3} xs={6} className="movie-column">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                />
                <p className="text-white">{movie.Title}</p>
              </Col>
            ))}
          </Row>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Movie must see in the life</h1>
          <Row className="movie-row">
            {this.state.Search4.map((movie, index) => (
              <Col key={index} lg={2} md={3} xs={6} className="movie-column">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                />
                <p className="text-white">{movie.Title}</p>
              </Col>
            ))}
          </Row>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Watch Again</h1>
          <Row className="movie-row">
            {this.state.Search5.map((movie, index) => (
              <Col key={index} lg={2} md={3} xs={6} className="movie-column">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                />
                <p className="text-white">{movie.Title}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default MainContent;
