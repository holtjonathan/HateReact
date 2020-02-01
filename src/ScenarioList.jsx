import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import Card from "react-bootstrap/Card";

function ScenarioList({ client, handleShow }) {
  return (
    <ApolloProvider client={client}>
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
            )
          );
        }}
      </Query>
    </ApolloProvider>
  );
}

export default ScenarioList;
