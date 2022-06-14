/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

import { Provider } from "react-redux";
import configureStore from "../../configure-store";

const store = configureStore();

describe("Search test", () => {
  it("Search should match snapshot", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
