import React from 'react';
import { Link } from 'react-router-dom';

const Hello = (props) => {
  return (
    <div>
      <p>{props.info}</p>
      <Link to='/'>👈 Go back!</Link>
    </div>
  );
};

export default Hello;
