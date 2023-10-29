import { Row, Col } from "react-bootstrap";
import { Component } from "react";

// OGNI GALLERY RICEVE TRAMITE PROP L'ARRAY DA MAPPARE

class Gallery extends Component {
  render() {
    return (
      <Row className="movie-row position-relative">
        <i className="bi bi-chevron-left text-white position-absolute fs-1 left"></i>
        {this.props.data.map((movie, index) => (
          <Col key={index} lg={2} md={3} xs={6} className="movie-column">
            <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            <p className="text-white">{movie.Title}</p>
          </Col>
        ))}
        <i className="bi bi-chevron-right text-white position-absolute fs-1 right"></i>
      </Row>
    );
  }
}

export default Gallery;
