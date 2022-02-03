import React from "react";

const MarkdownInput = (props) => {
  return (
    <section id="MarkdownInput">
      <h1>MarkdownInput</h1>
      <p>{props.textBrut}</p>
      <input value={props.textBrut} onChange={props.onTyping} />
    </section>
  );
};

export default MarkdownInput;