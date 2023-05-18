import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// IMPORT COMPONENTS
import Display from './components/Display';
import Nav from './components/Nav';
import OneCseUser from './components/OneCseUser';
import CreateCseUser from './components/CreateCseUser';
import EditCseUser from './components/EditCseUser';

function App() {
  const [cseUserList, setCseUserList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Display cseUserList={cseUserList} setCseUserList={setCseUserList}/>}/>
          <Route path='/createCSEUser/form' element={<CreateCseUser/>}/>
          <Route path='/cseUser/:id' element={<OneCseUser/>}/>
          <Route path='/viewCseUser/:id' element={<OneCseUser/>}/>
          <Route path='/editCseUser/:id' element={<EditCseUser/>}/>
          {/* <Route path='/deleteCseUser/:id' element={<DeleteCseUser/>}/> */}
        </Routes>
      </BrowserRouter>
      <h1>Catfish Accordion</h1>
      {/* <CreateCseUser/> */}
    </div>
  );
}

export default App;
