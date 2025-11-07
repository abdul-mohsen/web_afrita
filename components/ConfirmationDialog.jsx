// components/ConfirmationDialog.jsx

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const ConfirmationDialog = ({ open, onClose, onConfirm, itemId }) => {
  const [note, setNote] = useState("");
  const [error, setError] = useState(false);

  const handleConfirm = () => {
    if (!note.trim()) {
      setError(true); // Show error if input is empty
      return;
    }

    // Call back to the backend with the note and itemId
    onConfirm(itemId, note);
    setNote(""); // Clear the input after submission
    onClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Enter your note"
          type="text"
          fullWidth
          variant="outlined"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
            if (e.target.value.trim()) setError(false); // Remove error if input is valid
          }}
          error={error}
          helperText={error ? "This field is required" : ""}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
