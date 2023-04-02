import TextField from "@mui/material/TextField";

function NavInput() {
  return (
    <div className="text-field">
      <TextField
        id="outlined-search"
        label="What are you looking for?"
        type="search"
      />
    </div>
  );
}

export default NavInput;
