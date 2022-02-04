import React, { useState }  from "react";

const MarkdownInput = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  
  console.log('>>>>>>>>>>>>>>>>>>>>>>> MARKDOWN render');
  console.log('TITLE: ', title);
  console.log('CONTENT: ', content);

  return (
    <section className="MarkdownInput">
      <input value={props.title} onChange={props.onTitleChange} />
      <textarea value={props.content} onChange={props.onContentChange} />
    </section>
  );
};

export default MarkdownInput;