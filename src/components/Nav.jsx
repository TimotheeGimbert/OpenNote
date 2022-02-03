import React from "react";
import Note from "./Note"
import './nav.scss'

const Nav = () => {

  return (
    <section className="NotePreview">
      {Object.keys(localStorage).map( (key, index) => (
        < Note title={key} content={localStorage[key]} key={index} />
      ))}    
    </section>
  );

};

export default Nav;