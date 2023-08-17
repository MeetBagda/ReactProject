import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './header';
import Body from './body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Body />
  </>
);