import React, { useState, useEffect } from 'react';
import { ToDoGlobalState } from "./TodoGlobalHead";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

export default function AddTodoDialog({ open, handleClose, isUpdate, todoToUpdate, indexToUpdate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const globalState = React.useContext(ToDoGlobalState);
  const { todos } = globalState;

  // Reset the title and description when the dialog opens
  useEffect(() => {
    setTitle(isUpdate && todoToUpdate ? todoToUpdate.title : "");
    setDescription(isUpdate && todoToUpdate ? todoToUpdate.description : "");
  }, [open, isUpdate, todoToUpdate]);

  const handleSaveTodo = () => {
    if (isUpdate) {
      // Update the todo in the global state
      const updatedTodos = todos.map((todo, i) => (i === indexToUpdate ? { title, description } : todo));
      globalState.todos = updatedTodos;
    } else {
      // Add the new todo to the global state
      todos.push({ title, description });
    }
    setTitle("");
    setDescription("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isUpdate ? "Update Todo" : "Add New Todo"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Todo title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          autoFocus
          margin="dense"
          label="Todo description"
          type="text"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveTodo} color="primary">{isUpdate ? "Update" : "Add"}</Button>
      </DialogActions>
    </Dialog>
  );
}
