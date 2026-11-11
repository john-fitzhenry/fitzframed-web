import { Fragment } from "react";

// Splits a line into words that rise in one after another (see .word in globals.css).
export default function Words({ text, start = 0 }) {
  const words = text.split(" ");
  return words.map((w, i) => (
    <Fragment key={i}>
      <span className="word">
        <span style={{ "--i": start + i }}>{w}</span>
      </span>
      {i < words.length - 1 ? " " : null}
    </Fragment>
  ));
}
