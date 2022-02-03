import React from "react";
import './markdownInput.scss'

const MarkdownInput = (props) => {

  const handleSave = () => {
    localStorage.setItem(props.titleValue, props.textValue);
  };

  return (
    <section className="MarkdownInput">
      <input value={props.titleValue} onChange={props.onTitleChange} />
      <textarea value={props.textValue} onChange={props.onTextChange} />
      <button onClick={handleSave}>Save your note</button>
    </section>
  );
};

export default MarkdownInput;