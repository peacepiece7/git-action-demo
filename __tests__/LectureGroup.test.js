/**
 * @jest-environment jsdom
 */
import React from "react";
import { getByTestId, render } from "@testing-library/react";
import LectureGroup from "../components/lecture/LectureGroup";

describe("강의 목록은", () => {
  // 알 수 없는 헤딩 에러
  it("제목을 가지고 있어야 한다.", () => {
    const { getByRole } = render(<LectureGroup />);
    const lectureTitle = getByRole("heading", {
      level: 1,
    });
    expect(lectureTitle).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureGroup />);
    const badge = getByText("Best");
    expect(badge).toBeInTheDocument();
  });
});
