import React from "react";
import Note from './Note';

const Nav = (props) => {
  const noteList=localStorage;

  return (
    <div className="nav" >
      <button onClick={() => window.location.reload(false)}>Ajouter une nouvelle note</button>
      {Object.keys(noteList).map( (title, index) => (
        <div 
          onClick={() => {
            props.selectNote(title, localStorage[title]);
            props.changeOldTitle(title);
            }
          } 
          key={index}
          >
          <Note 
            title={title} 
            content={localStorage[title]} 
          />
        </div>
      ))} 
      <button onClick={() => {
        localStorage.clear();
        window.location.reload(false);
      }}>Supprimer toutes les notes</button>
    </div>
  );
};

export default Nav;


