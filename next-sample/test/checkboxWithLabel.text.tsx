import React from "react";
import { shallow } from "enzyme";
import CheckboxWithLabel from "./checkboxWithLabel";

test("CheckboxWithLabel changes the text after click", () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEquall("Off");
  checkbox.find("input").simulate("change");
  expect(checkbox.text()).toEqual("On");

  expect(checkbox).toMatchSnapshot();
});
