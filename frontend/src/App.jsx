import React from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotificationPage from "./pages/NotificationPage";
import ProfilePage from "./pages/ProfilePage";

import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
const App = () => {
  return (
    <div className="flex max-w-6xl mx-auto">
	  <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>

	  <RightPanel />
    </div>
  );
};

export default App;
