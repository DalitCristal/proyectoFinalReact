import React from "react";
import TextField from "@mui/material/TextField";

function NavInput() {
  return (
    <div className="text-field">
      <TextField
        id="outlined-search"
        label="¿Qué estas buscando?"
        type="search"
      />
    </div>
  );
}

export default NavInput;
