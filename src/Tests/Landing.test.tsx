import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom"
import Landing from "../components/Landing"

  const playMusic = (): void => {
  }
  const autoLandAnimation = (): void => {
  }


test("Everything is OK", () => {
  render(<Router><Landing playMusic={playMusic} autoLandAnimation={autoLandAnimation} /></Router>)
})