import React, { useState }  from "react";
import NoteDisplay from './NoteDisplay';
import MarkdownInput from './MarkdownInput';

const Page = (props) => {

  const initial = props.title;
  const [title, setTitle] = useState(initial);
  const [content, setContent] = useState();
  
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onContentChange = (event) => {
    setContent(event.target.value);
  }

  console.log('PAGE render <<<<<<<<<<<<');
  console.log('TITLE: ', title);
  console.log('CONTENT: ', content);

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


/*   const handleSave = () => {
    localStorage.setItem(title, text);
    console.log('NEW NOTE SAVED ', title, text);
    localStorage.removeItem(props.noteTitle);
  } */
