

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Millenniumpage from "./MillenniumpageComponent";

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

storiesOf("Millenniumpage", module)
  .add("default", () => <Millenniumpage {...myProps} {...actions} />)
  .add("pinned", () => (
    <Millenniumpage {...myProps} pinned={true} {...actions} />
  ))
  .add("archived", () => (
    <Millenniumpage {...myProps} archived={true} {...actions} />
  ));
