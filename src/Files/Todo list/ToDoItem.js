import React, { useState } from 'react';

import { ToDoGlobalState } from "./TodoGlobalHead";
import DeleteTodoDialog from './DeleteTodoDialog';

import { Typography, Button, Box } from '@mui/material';
import AddTodoDialog from './AddTodoDialog';

export default function TodoItem({ index }) {
  const globalState = React.useContext(ToDoGlobalState);
  const { todos } = globalState;
  const todo = todos[index];
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="h6">{todo.title}</Typography>
        <Typography variant="body1">{todo.description}</Typography>
      </Box>
      <Box> 
        <Button onClick={() => setUpdateDialogOpen(true)} variant="contained" color="primary" style={{ marginRight: '1%', bottom: '10%' }}>
          Update
        </Button>
        <Button onClick={() => setDeleteDialogOpen(true)} variant="contained" color="secondary">
          Delete
        </Button>
      <DeleteTodoDialog open={deleteDialogOpen} handleClose={() => setDeleteDialogOpen(false)} deleteTodo={() => { todos.splice(index, 1);}} />
      <AddTodoDialog open={updateDialogOpen} handleClose={() => setUpdateDialogOpen(false)} isUpdate={true} todoToUpdate={todo} indexToUpdate={index} />
      </Box>
    </Box>
  );
}