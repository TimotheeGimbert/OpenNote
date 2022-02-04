import React from "react";

const MarkdownInput = (props) => {
  
  return (
    <section className="MarkdownInput">
      <input value={props.title} onChange={props.onTitleChange} />
      <textarea value={props.content} onChange={props.onContentChange} />
    </section>
  );
};

export default MarkdownInput;