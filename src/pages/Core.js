import React from 'react';
import { Link } from 'react-router-dom';

const Core = (props) => {
  return (
    <div>
      <p>{props.info}</p>
      <Link to='/'>👈 Go back!</Link>
    </div>
  );
};

export default Core;
