import React, { Component } from "react";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import firstProj from "../Images/quick-cursor.jpg";
import secProj from "../Images/ai.jpg";

export default class OpenSources extends Component {
  render() {
    return (
      <CardGroup id="freeSources">
        <Card border="primary" style={{ height: "600px" }} className="m-2">
          <Card.Img style={{ height: "300px" }} variant="top" src={firstProj} />
          <Card.Body>
            <Card.Title>Cursor Controller</Card.Title>
            <Card.Text>Control the Cursor with ur finger tip.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Moving mouse with your finger tip</ListGroupItem>
            <ListGroupItem>Mouse click when you do rock gesture</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Source Code</Card.Link>
            <Card.Link href="#">Demo Link</Card.Link>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ height: "600px" }} className="m-2">
          <Card.Img style={{ height: "300px" }} variant="top" src={secProj} />
          <Card.Body>
            <Card.Title>Snowy's Assistant</Card.Title>
            <Card.Text>Simple chatty voice AI called [Snowy].</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Machine Learning Chats.</ListGroupItem>
            <ListGroupItem>Some tasks [...].</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Source Code</Card.Link>
            <Card.Link href="#">Demo Link</Card.Link>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ height: "600px" }} className="m-2">
          <Card.Img style={{ height: "300px" }} variant="top" src={firstProj} />
          <Card.Body>
            <Card.Title>Cursor Controller</Card.Title>
            <Card.Text>Control the Cursor with ur finger tip.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Moving mouse with your finger tip</ListGroupItem>
            <ListGroupItem>Mouse click when you do rock gesture</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Source Code</Card.Link>
            <Card.Link href="#">Demo Link</Card.Link>
          </Card.Body>
        </Card>{" "}
      </CardGroup>
    );
  }
}
