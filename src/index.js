import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Timer from './Timer';
import Educator from './Educator';
import State from './State';
import App1 from './App1';
import App2 from './App2';
import HelloComp from './components/HelloComp';
import HelloComponent from './components/HelloComponent';
import HelloComponentForm from './components/HelloComponentForm';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//root.render(<Timer />);
//root.render(<Educator />);
//root.render(<State />);
//root.render(<App1 />);
//root.render(<App2 />);
// root.render(<HelloComp />);
// root.render(<HelloComponent />);
root.render(<HelloComponentForm />);
