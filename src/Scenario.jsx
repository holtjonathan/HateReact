import React, { useEffect, useState } from "react";
import Reward from "./Reward";
import Special from "./Special";
import CardDeck from "react-bootstrap/CardDeck";

function Scenario({ name, description, scenarioRewards, scenarioSpecials }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedScen, setSelectedScen] = useState(null);

  const handleClose = () => {
    handleShow();
    setShowModal(false);
  };

  const handleShow = scen => {
    console.log("here?");
    // setSelectedScen(scen);
    setShowModal(true);
  };

  return (
    <div>
      {/* <p>{description}</p> */}
      <div>
        <h4>Rewards:</h4>

        <CardDeck>
          {scenarioRewards.map(({ reward }) => (
            <Reward reward={reward} key={reward.rewardId}></Reward>
          ))}
        </CardDeck>
      </div>
      <br />
      <div>
        <h4>Specials:</h4>

        <CardDeck>
          {scenarioSpecials.map(({ special }) => (
            <Special special={special} key={special.specialId}></Special>
          ))}
        </CardDeck>
      </div>
    </div>
  );
}

export default Scenario;
