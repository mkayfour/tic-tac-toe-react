import React from 'react';
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

const Icon = ({ name }) => {
  console.log(name);
  switch (name) {
    case 'circle':
      return <FaRegCircle className='icon' />;
    case 'cross':
      return <FaTimes className='icon' />;
    default:
      return <FaPen />;
  }
};

export default Icon;
