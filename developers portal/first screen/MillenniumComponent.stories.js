import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Millennium from "./MillenniumComponent";

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

storiesOf("Millennium", module)
  .add("default", () => <Millennium {...myProps} {...actions} />)
  .add("pinned", () => <Millennium {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <Millennium {...myProps} archived={true} {...actions} />
  ));
