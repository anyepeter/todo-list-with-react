import React from 'react';
import { createRoot } from 'react-dom/client';
// File components
import TodoContainer from './funcionBased/components/TodoContainer';
// Stylesheet
import './funcionBased/App.css';

// The root element for the app.
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
