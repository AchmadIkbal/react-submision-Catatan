import React from 'react';
import { createRoot } from 'react-dom/client';
import CatatanApp from './components/CatatanApp';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<CatatanApp/>);