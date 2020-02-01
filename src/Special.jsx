//NO LONGER USED
import React from "react";
import Card from "react-bootstrap/Card";

function Special({ special }) {
  return (
    <div>
      {/* <h1>{reward.name}</h1> */}
      <Card style={{ width: "18rem" }}>
        <Card.Header>{special.name}</Card.Header>
        <Card.Body>
          <Card.Text>{special.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Special;
