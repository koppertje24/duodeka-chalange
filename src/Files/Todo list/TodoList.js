import React, { useState } from 'react';

import TodoItem from "./ToDoItem";
import { ToDoGlobalState } from "./TodoGlobalHead";
import AddTodoDialog from './AddTodoDialog';

import { Typography, List, ListItem, Box, Button, Card, CardContent } from '@mui/material';


export default function ToDoList() {
  const { todos } = React.useContext(ToDoGlobalState);
  const [dialogOpen, setDialogOpen] = useState(false);

  const count = todos.length;
  let heading = '';
  if (count > 0) {
    const noun = count > 1 ? "Todo's" : 'Todo';
    heading = count + ' ' + noun;
  }

  return (
    <Box component="section">
      <Typography variant="h2">{heading}</Typography>
      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
        Add Todo
      </Button>
      <AddTodoDialog open={dialogOpen} handleClose={() => setDialogOpen(false)} />
      <List style={{ padding: 0 }}>
        {todos.map((todo, index) =>
          <ListItem key={index}>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <TodoItem index={index} />
              </CardContent>
            </Card>
          </ListItem>
        )}
      </List>
    </Box>
  );
}