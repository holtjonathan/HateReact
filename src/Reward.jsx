import React from "react";
import Card from "react-bootstrap/Card";

function Reward({ reward }) {
  return (
    <div>
      {/* <h1>{reward.name}</h1> */}
      <Card style={{ width: "18rem" }}>
        <Card.Header>{reward.name}</Card.Header>
        <Card.Body>
          <Card.Title>{reward.rewardType}</Card.Title>
          <Card.Text>{reward.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Hate: {reward.hateReward} <br />
          Resource: {reward.resourceReward}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Reward;
