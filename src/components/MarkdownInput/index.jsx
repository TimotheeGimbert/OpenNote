import React from "react";

const MarkdownInput = (props) => {
  return (
    <section id="MarkdownInput">
      <h1>MarkdownInput</h1>
      <p>{props.value}</p>
      <input value={props.value} onChange={props.onChange} />
    </section>
  );
};

export default MarkdownInput;