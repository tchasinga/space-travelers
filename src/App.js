import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Myprofile from './components/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
