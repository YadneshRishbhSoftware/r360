import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import CalendarCard from './components/calendarCard';
import ForgotPassword from './components/forgotPassword';

function App() {
  return (
    // <Login />
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/calender" element={<CalendarCard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
