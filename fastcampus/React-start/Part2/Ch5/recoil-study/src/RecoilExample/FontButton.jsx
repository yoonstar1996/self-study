import React from "react";
import { fontSizeLabelState, fontSizeState } from "./store";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "./CounterStore";

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  const [text] = useRecoilState(textState);

  return (
    <>
      <div>Current font size: {fontSizeLabel}</div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge {text}
      </button>
    </>
  );
}
