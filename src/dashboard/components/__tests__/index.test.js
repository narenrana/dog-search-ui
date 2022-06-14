/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import Dashboard from "../index";

import { Provider } from "react-redux";
import configureStore from "../../../configure-store";

const store = configureStore();

describe("Dashboard test", () => {
  it("Dashboard should match snapshot", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
