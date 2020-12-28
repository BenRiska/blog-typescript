import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom"
import App from '../App';


test("Everything is OK", () => {
  render(<Router><App /></Router>)
})