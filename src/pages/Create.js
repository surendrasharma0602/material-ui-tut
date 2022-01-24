import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const style = {
  btn: {
    fontSize: 26,
  },
  field: {
    marginTop: 2,
    marginBottom: 2,
    display: "block",
  },
};

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(!title);
    setDetailsError(!details);
    if (title && details) {
      console.log(title);
      console.log(details);
    }
  };
  return (
    <Container>
      <Typography component="h6" variant="h2" color="textSecondary" gutterBottom>
        Create New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={style.field}
          onChange={(e) => setTitle(e.target.value)}
          color="secondary"
          label="Note title"
          required
          variant="outlined"
          fullWidth
          error={titleError}
        />
        <TextField
          sx={style.field}
          onChange={(e) => setDetails(e.target.value)}
          color="secondary"
          label="Details"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          error={detailsError}
        />

        <FormControl sx={style.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel label="Money" value="money" control={<Radio />} />
            <FormControlLabel label="ToDo" value="todos" control={<Radio />} />
            <FormControlLabel label="Reminders" value="reminder" control={<Radio />} />
            <FormControlLabel label="Work" value="work" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <Button
          sx={style.btn}
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<ArrowForwardIosOutlinedIcon fontSize="small" />}
        >
          submit
        </Button>
      </form>
    </Container>
  );
}
