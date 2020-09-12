import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import './BigJumbo.css'

export default function BigJumbo() {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Jobs</h1>
          <p>
            <h3>Find Your Next Job! We've scraped jobs from various sites just for you. </h3>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
