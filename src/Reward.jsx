import React from "react";
import Card from "react-bootstrap/Card";

function Reward({ reward }) {
  return (
    <div>
      {/* <h1>{reward.name}</h1> */}
      <Card style={{ width: "18rem" }}>
        <Card.Header>{reward.rewardType}</Card.Header>
        <Card.Body>
          <Card.Title>{reward.name}</Card.Title>
          <Card.Text>{reward.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="hateReward">
            <strong>Hate:</strong> {reward.hateReward}
          </div>

          <div className="resourceReward">
            <strong>Resource:</strong> {reward.resourceReward}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Reward;
