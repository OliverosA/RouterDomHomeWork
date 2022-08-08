import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>
        <strong>Core Code Bootcamp Blog!</strong>
      </h1>
      <nav>
        <li>
          <Link to='react'>
            <strong>React</strong>
          </Link>
          <p>Lets see React Information</p>
        </li>
        <li>
          <Link to='core'>
            <strong>Core Code</strong>
          </Link>
          <p>Lets see Core Code Information</p>
        </li>
        <li>
          <Link to='hello'>
            <strong>Hello World</strong>
          </Link>
          <p>Lets see Hello World Information</p>
        </li>
      </nav>
    </div>
  );
};
export default Layout;
