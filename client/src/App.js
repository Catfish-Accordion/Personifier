import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// IMPORT COMPONENTS
import Display from './components/Display';
import Nav from './components/Nav';
import CreateCseUser from './components/CreateCseUser';

function App() {
  const [cseUserList, setCseUserList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Display cseUserList={cseUserList} setCseUserList={setCseUserList}/>}/>
        </Routes>
      </BrowserRouter>
      <h1>Catfish Accordion</h1>
      <CreateCseUser/>
    </div>
  );
}

export default App;
