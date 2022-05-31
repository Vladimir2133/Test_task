import React from 'react';
import { Header } from './components/header/Header';
import {WorkWithGet} from './components/workingWithGet/WorkWithGet'
import WorkWithPost from './components/workWithPost/WorkWithPost'
import './style.css'

function App() {
  return (
    <div className="container">
      <Header />
      <WorkWithGet />
      <WorkWithPost />
    </div>
  );
}

export default App;
