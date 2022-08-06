import React from 'react';
import { Link } from 'react-router-dom';

const RInfo = (props) => {
  return (
    <div>
      <p>{props.info}</p>
      <Link to='/'>👈 Go back!</Link>
    </div>
  );
};

export default RInfo;
