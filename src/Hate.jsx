import React, { useState } from "react";
import config from "./config";
import ApolloClient from "apollo-boost";
import Jumbotron from "react-bootstrap/Jumbotron";
import ScenarioModal from "./ScenarioModal";
import ScenarioList from "./ScenarioList";

const client = new ApolloClient({
  uri: config.hateUrl
});

function HatePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedScen, setSelectedScen] = useState({
    scenarioId: null,
    description: null,
    name: null,
    scenarioRewardAssignments: null,
    scenarioSpecialAssignments: null
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (
    clickedscenarioId,
    clickeddescription,
    clickedname,
    clickedscenarioRewardAssignments,
    clickedscenarioSpecialAssignments
  ) => {
    setSelectedScen({
      ...selectedScen,
      scenarioId: clickedscenarioId,
      description: clickeddescription,
      name: clickedname,
      scenarioRewardAssignments: clickedscenarioRewardAssignments,
      scenarioSpecialAssignments: clickedscenarioSpecialAssignments
    });

    setShowModal(true);
  };

  return (
    <div>
      <ScenarioModal
        scenario={selectedScen}
        showModal={showModal}
        handleClose={handleClose}
      ></ScenarioModal>

      <Jumbotron>
        <h1>Scenarios</h1>
        <p>The many different scenarios to play in the game of HATE</p>
      </Jumbotron>

      <ScenarioList client={client} handleShow={handleShow}></ScenarioList>
    </div>
  );
}

export default HatePage;
