import React from "react";
import LectureList from "./LectureList";

const LectureGroup = (): JSX.Element => {
  return (
    <div>
      <span>Best</span>
      <div role="heading" aria-level={1}>
        이번 주 베스트셀링 강의
      </div>
      <LectureList />
    </div>
  );
};

export default LectureGroup;
