import React        from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTop    from './HeaderTop/HeaderTop';
import './index.css';


export default function Header()
{
  return (
    <header className='border border-dark'>
      <HeaderTop/>
      <HeaderBottom/>
    </header>
  );
}