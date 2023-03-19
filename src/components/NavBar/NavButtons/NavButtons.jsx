import React from "react";

function NavButtons(props) {
  return (
    <div className="buttons">
      <a href="www.google.com">{props.btnStart}</a>
      <a href="www.google.com">{props.btnCenter}</a>
      <a href="www.google.com">{props.btnEnd}</a>
    </div>
  );
}

export default NavButtons;
