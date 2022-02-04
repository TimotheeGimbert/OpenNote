import React from "react";
import Note from './Note';

const Nav = (props) => {

  return (
    <div className="nav" >
      {Object.keys(localStorage).map( (title, index) => (
        <div 
          onClick={() => {
            props.changeTitle(title);
            props.changeContent(localStorage[title]);
            }
          } 
          key={index}
          >
          <Note 
            title={title} 
            text={localStorage[title]} 
          />
        </div>
      ))} 
    </div>
  );
};

export default Nav;


