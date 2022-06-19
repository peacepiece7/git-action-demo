/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Banner from "../components/Banner";

describe("App", () => {
  it("배너가 랜더링 되어야 한다.", () => {
    const { getByText } = render(<Banner />);

    const banner = getByText("배너");
    expect(banner).toBeInTheDocument;
  });
});
