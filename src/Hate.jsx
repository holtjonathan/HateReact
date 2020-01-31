import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import config from "./config";
import ApolloClient from "apollo-boost";
import Reward from "./Reward";
import Special from "./Special";
import Scenario from "./Scenario";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";

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
    // handleShow();
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
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedScen.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Scenario
            name={selectedScen.name}
            description={selectedScen.description}
            scenarioRewards={selectedScen.scenarioRewardAssignments}
            scenarioSpecials={selectedScen.scenarioSpecialAssignments}
            key={selectedScen.scenarioId}
          ></Scenario>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Jumbotron>
        <h1>Scenarios</h1>
        <p>The many different scenarios to play in the game of HATE</p>
      </Jumbotron>

      <ApolloProvider client={client}>
        <div>
          <Query
            query={gql`
              {
                scenarios {
                  scenarioId
                  description
                  name
                  scenarioRewardAssignments {
                    reward {
                      rewardId
                      name
                      description
                      hateReward
                      resourceReward
                      unitUpgrade
                      rewardType
                    }
                  }
                  scenarioSpecialAssignments {
                    special {
                      specialId
                      name
                      description
                    }
                  }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return data.scenarios.map(
                ({
                  scenarioId,
                  description,
                  name,
                  scenarioRewardAssignments,
                  scenarioSpecialAssignments
                }) => (
                  <div>
                    <Card
                      style={{ width: "18rem" }}
                      onClick={() =>
                        handleShow(
                          scenarioId,
                          description,
                          name,
                          scenarioRewardAssignments,
                          scenarioSpecialAssignments
                        )
                      }
                    >
                      <Card.Header>{name}</Card.Header>
                      <Card.Body>
                        <Card.Text>{description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )
              );
            }}
          </Query>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default HatePage;
