import React from "react";
import Scenario from "./Scenario";
import Modal from "react-bootstrap/Modal";

function ScenarioModal({ scenario, showModal, handleClose }) {
  return (
    <div>
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{scenario.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Scenario
            name={scenario.name}
            description={scenario.description}
            scenarioRewards={scenario.scenarioRewardAssignments}
            scenarioSpecials={scenario.scenarioSpecialAssignments}
            key={scenario.scenarioId}
          ></Scenario>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ScenarioModal;
