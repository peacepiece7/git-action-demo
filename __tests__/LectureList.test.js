/**
 * @jest-environment jsdom
 */
import React from "react";
import { getByTestId, render } from "@testing-library/react";
import LectureList from "../components/lecture/LectureList";

describe("강의 목록은", () => {
  it("노출이 되야아한다", () => {
    // const { getByRole } = render(<LectureList />);
    // const lectureTitle = getByRole("heading");
    // expect(lectureTitle).toBeInTheDocument();
  });
});
