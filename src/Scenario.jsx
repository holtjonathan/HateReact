import React from "react";
import Reward from "./Reward";
import Specials from "./Specials";
import CardDeck from "react-bootstrap/CardDeck";

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

function Scenario({ name, description, scenarioRewards, scenarioSpecials }) {
  const groupedSpecials = groupBy(
    scenarioSpecials,
    scenarioSpecials => scenarioSpecials.special.name
  );
  const rules = groupedSpecials.get("Special Rules");
  const setups = groupedSpecials.get("Special Setup");
  const actions = groupedSpecials.get("Special Actions");

  console.log("allSpecials", scenarioSpecials);
  console.log("rules", rules);
  console.log("setup", setups);
  // console.log('actions', groupedSpecials.get("Special Actions"))
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
        {rules && <Specials type="Special Rules" specials={rules} />}
        {setups && <Specials type="Special Setups" specials={setups} />}
        {actions && <Specials type="Special Actions" specials={actions} />}
      </div>
    </div>
  );
}

export default Scenario;
