import classNames from 'classnames';
import React from 'react';
import { useThemeToggleContext, useThemeContext } from '../../providers/ThemeProvider';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();

  // const handleChange = (e) => {
  //   const isChecked = e.target.checked;
  //   if (isChecked) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };
  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    // <nav className="navbar navbar-light bg-light">
    <nav className={classNames('navbar navbar-light', {
      'bg-light': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 ">Rick & Morty API</span>
      </div>
      <button className="btn-primary" onClick={() => setTheme('dark')}>Set Dark Theme</button>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange} />
      </div>
    </nav>
  );
};

export default Header;
