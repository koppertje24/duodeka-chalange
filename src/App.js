import './App.css';

import PersonalLoremIpsum from './Files/Lorem Ipsum/Lorem Ipsum';
import ProveOfConsept from './Files/Prove of consept/ProveOfConsept';
import ToDoGlobal from './Files/Todo list/ToDoGlobal';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink} from 'react-router-dom';
import { Drawer, Button, List, ListItem, IconButton, Box  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Home', component: () => <PersonalLoremIpsum HeaderName='Home Page' /> },
  { name: 'About', component: () => <PersonalLoremIpsum HeaderName='About Page' /> },
  { name: "prove of consept", component: () => <ProveOfConsept/>},
  { name: "TODO's", component: () => <ToDoGlobal/>},
  { name: 'Contact', component: () => <PersonalLoremIpsum HeaderName='Contact Page' />},
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
      <Box position="fixed" top={'2%'} left={'2%'} zIndex="drawer">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerClose}
          style={{ width: drawerOpen ? '20%' : '0', padding: '0 20px' }}
        >
          <List>
            {pages.map(({ name }) => (
              <ListItem key={name}>
                <Button component={RouterLink} to={`/${name.toLowerCase()}`}>
                  {name}
                </Button>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div style={{width: '80%' , padding: '0% 10%', right:'1%' }}>
          <Routes>
            <Route index element={<PersonalLoremIpsum HeaderName='Home Page' />} />
            {pages.map(({ name, component: Component }) => (
              <Route key={name} path={`/${name.toLowerCase()}`} element={<Component />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
