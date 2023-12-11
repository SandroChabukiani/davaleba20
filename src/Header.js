import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const LanguageContext = React.createContext();

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <button onClick={() => handleLanguageChange('ge')}>Georgian</button>
        <button onClick={() => handleLanguageChange('en')}>English</button>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Task</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export { Header, LanguageContext };
