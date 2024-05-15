import React from 'react';
import { Outlet } from 'react-router-dom';
import './Pages.css';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    // <div>
    //   <header>
    //     <h1>My App</h1>
    //     <nav>
    //       <ul>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/contact">Contact</a></li>
    //       </ul>
    //     </nav>
    //   </header>
    //   <main>
    //     <Outlet />
    //   </main>
    // </div>
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
    

    
  );
}

export default Layout;