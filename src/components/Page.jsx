import React, { useState }  from "react";
import NoteDisplay from './NoteDisplay';
import MarkdownInput from './MarkdownInput';

const Page = (props) => {
  const initialTitle = props.title;
  const initialContent = props.title;
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  
  console.log('>>>>>>>>>>>>>>>>>>>>> PAGE render');
  console.log('TITLE: ', initialTitle);
  console.log('CONTENT: ', initialContent);

  const onTitleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  }
  const onContentChange = (event) => {
    setContent(event.target.value);
  }


/*   const handleSave = () => {
    localStorage.setItem(title, text);
    console.log('NEW NOTE SAVED ', title, text);
    localStorage.removeItem(props.noteTitle);
  } */

  return (
    <div className="page">
      <NoteDisplay 
        title={title} 
        content={content} 
      />
      <MarkdownInput 
        title={title} 
        content={content} 
        onTitleChange={onTitleChange} 
        onContentChange={onContentChange}
      />
      {/* <button onClick={handleSave}>Save your note</button> */}
    </div>
  );
}

export default Page;