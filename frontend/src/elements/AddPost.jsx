import { Button, TextField } from "@mui/material";
import React from "react";

const AddPost = () => {
  return (
    <div style={{ margin: "7% 20% 0 20%" }}>
      <TextField fullWidth variant="outlined" label="post title" />
      <br />
      <br />
      <TextField
        variant="outlined"
        multiline
        rows={10}
        fullWidth
        label="Type a post"
      />
      <br /><br />
      <TextField fullWidth variant="outlined" label="Image URL" />
      <br /><br />
      <Button variant="contained" color="secondary">
            Submit
          </Button>
    </div>
  );
};

export default AddPost;
