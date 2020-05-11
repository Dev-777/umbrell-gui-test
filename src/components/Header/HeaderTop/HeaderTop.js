import React from 'react';
import './headerTop.css';


export default function HeaderTop()
{
  return (
    <div id='headerTop_div'>
      <div className=' d-flex align-items-center'>
        <p>
          <i className="fas fa-umbrella"/>
          Umbrella Corporation
        </p>
        <nav>
          <ul>
            <li>
              <div>
                My Account
                <i className="fas fa-chevron-down"/>
              </div>
              <ul id='dropDown'>
                <li>My profile</li>
                <li>My orders</li>
                <li>Purchase History</li>
              </ul>
            </li>
            <li>
              <div>
                Dollar
                <i className="fas fa-chevron-down"/>
              </div>
              <ul id='dropDown'>
                <li>Рубли</li>
                <li>Դրամ</li>
              </ul>
            </li>
            <li>
              <div>
                English
                <i className="fas fa-chevron-down"/>
              </div>
              <ul id='dropDown'>
                <li>Հայերեն</li>
                <li>Русский</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}