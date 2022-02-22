import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./AddMovie.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddMovie({ handleAdd }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [movie, setMovie] = React.useState({
    id: Math.random(),
    image: "",
    rating: 0,
    name: "",
    date: "",
    type: "",
    description: "",
  });
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const handleMovie = () => {
    handleAdd(movie);
    handleClose();
  };

  return (
    <div className="add">
      <Button onClick={handleOpen}>Add movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              margin: 1,
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Movie Name"
              id="text"
              name="name"
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              margin: 1,
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Movie Image"
              id="text"
              name="image"
              onChange={handleChange}
            />
          </Box>
          <TextField
            sx={{ margin: 1 }}
            name="rating"
            id="outlined-number"
            label="Rate"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <br />
          <div style={{ margin: 1 }}>
            <span>Date: </span>
            <input
              type="date"
              id="text"
              name="date"
              style={{ margin: 1 }}
              onChange={handleChange}
            />
          </div>
          <Box
            sx={{
              margin: 1,
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Type"
              id="text"
              name="type"
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              margin: 1,
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Description"
              id="text"
              name="description"
              onChange={handleChange}
            />
          </Box>
          <button onClick={handleMovie}>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}
