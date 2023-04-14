import React from 'react';
import { NavLink } from 'react-router-dom/';
import s from './Navigations.module.css';

const Navigations = () => {
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        {' '}
        Home{' '}
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        {' '}
        Movies{' '}
      </NavLink>
      <hr />
    </nav>
  );
};

export default Navigations;
