import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Loginmillennium from "./LoginmillenniumComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Loginmillennium", module)
  .add("default", () => <Loginmillennium {...myProps} {...actions} />)
  .add("pinned", () => (
    <Loginmillennium {...myProps} pinned={true} {...actions} />
  ))
  .add("archived", () => (
    <Loginmillennium {...myProps} archived={true} {...actions} />
  ));
