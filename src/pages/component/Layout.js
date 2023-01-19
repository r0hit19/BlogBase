import { Link } from 'gatsby';
import React from 'react';
import './Layout.css'

export default function Layout({children}) {
  return (
    <div className='parent'>
        <nav>
            <h1>BlogBase</h1>
            <Link to='/' className="link">Home</Link>
        </nav>
        <div className='child'>
            {children}
        </div>
    </div>
  );
}
