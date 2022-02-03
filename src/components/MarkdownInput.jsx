import React from "react";

const MarkdownInput = (props) => {

  const currentTitle = props.title;
  
  const handleSave = () => {
    localStorage.setItem(props.title, props.text);
    props.removeOld();

  }
  return (
    <section className="MarkdownInput">
      <input value={props.title} onChange={props.onTitleChange} />
      <textarea value={props.text} onChange={props.onTextChange} />
      <button onClick={handleSave}>Save your note</button>
    </section>
  );
};

export default MarkdownInput;