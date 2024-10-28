import { Button, TextField } from "@mui/material";
import style from "./searchPost.module.css";
import { useState } from "react";

const SearchPost = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className={style.posts}>
        <TextField
          onChange={(event) => setValue(event.target.value)}
          value={value}
          label="Выбери пост"
        />
        <Button variant="contained">Искать</Button>
      </div>
    </>
  );
};
export default SearchPost;
