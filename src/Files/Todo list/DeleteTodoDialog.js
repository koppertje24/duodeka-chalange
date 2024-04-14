import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

export default function DeleteTodoDialog({ open, handleClose, deleteTodo }) {
  const handleDeleteTodo = () => {
    deleteTodo();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure you want to delete this todo?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteTodo} color="secondary">Delete</Button>
      </DialogActions>
    </Dialog>
  );
}