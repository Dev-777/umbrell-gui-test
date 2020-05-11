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
            <li>My Account
              <i className="fas fa-chevron-down"/>
              <ul id='drop'>
                <li>My profile</li>
                <li>My orders</li>
                <li>Purchase History</li>

              </ul>
            </li>
            <li>$Dollar
              <i className="fas fa-chevron-down"/>
            </li>
            <li>English
              <i className="fas fa-chevron-down"/>
            </li>
          </ul>
        </nav>
      </div>


    </div> );
}