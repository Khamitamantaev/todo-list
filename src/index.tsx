import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {
    RecoilRoot,
  } from 'recoil';  

import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(<RecoilRoot><App /></RecoilRoot>, document.querySelector('#root'));