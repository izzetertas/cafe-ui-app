import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import CheckoutPage from '../CheckoutPage';
import HomePage from '../HomePage';
import TaskListPage from '../TaskListPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/tasks" element={<TaskListPage />} />
    </Routes>
  </BrowserRouter>
)


export default App;
