import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Timer from './Timer';
import Educator from './Educator';
import State from './State';
import App1 from './App1';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//root.render(<Timer />);
//root.render(<Educator />);
//root.render(<State />);
root.render(<App1 />);
