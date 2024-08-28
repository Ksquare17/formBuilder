import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { FormDetail } from './pages/ViewFormAnalytics';
import { Welcome } from './pages/Welcome';
import { UserAbout } from './pages/UserWebsite/About';
import { UserHome } from './pages/UserWebsite/Home';
import React from 'react';
import CreateForm from './pages/CreateForm';
import UserContact from './pages/UserWebsite/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Welcome />} />
        {/* admin routes */}
        <Route
          path='/dashboard'
          element={
              <Dashboard />
          }
        />
        <Route
          path='/new-form/:id'
          element={
              <CreateForm />
          }
        />
        <Route
          path='/form/:id'
          element={
              <FormDetail />
          }
        />
      
        <Route
          path='/home'
          element={
              <UserHome />
          }
        />
        <Route
          path='/about'
          element={
              <UserAbout />
          }
        />
        <Route
          path='/contact'
          element={
              <UserContact />
          }
        />
        {/* user routes end */}

        <Route path="*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
