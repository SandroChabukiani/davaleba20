import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, LanguageContext } from './Header';
import AddTask from './AddTask';
import EditTask from './EditTask';
import TasksList from './TasksList';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div>
          <Header />
          <Routes>
            <Route path="/add" element={<AddTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="/" element={<TasksList />} />
          </Routes>
        </div>
      </LanguageContext.Provider>
    </Router>
  );
};

export default App;
