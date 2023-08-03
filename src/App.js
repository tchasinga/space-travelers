import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/MyProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <Layout>
                {' '}
                <Rockets />
                {' '}
              </Layout>
)}
          />
          <Route
            path="/mission"
            element={(
              <Layout>
                {' '}
                <Missions />
                {' '}
              </Layout>
)}
          />
          <Route
            path="/profile"
            element={(
              <Layout>
                {' '}
                <Myprofile />
                {' '}
              </Layout>
)}
          />
          {/* <Route path="/rockets" element={<Rockets />} /> */}
          {/* <Route path="/missions" element={<Missions />} /> */}
          {/* <Route path="/myprofile" element={<Myprofile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
