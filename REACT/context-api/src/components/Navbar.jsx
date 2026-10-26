import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);


  // Inline styling for quick setup
  const styles = {
    nav: {
      backgroundColor:theme==="dark"?"black":"wheat",
      color: theme==="dark"?"white":"black",
      padding: '1rem 2rem',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      zIndex: 1000,
      borderBottom:"1px solid gray"
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      letterSpacing: '1px',
      cursor: 'pointer',
    },
    menuToggle: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      gap: '5px',
    },
    bar: {
      width: '25px',
      height: '3px',
      backgroundColor: '#ffffff',
      transition: '0.3s',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    link: {
      color: theme==="dark"?"#cccccc":"black",
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.2s',
    },
    ctaButton: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
  };

  // Responsive mobile style overrides
 

  return (
    // <nav style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}} >
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Brand Logo */}
        <div style={styles.logo}>BrandName</div>


        {/* Navigation Links */}
        <ul style={window.innerWidth <= 768 ? mobileLinksStyle : styles.navLinks}>
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#features" style={styles.link}>Features</a></li>
          <li><a href="#pricing" style={styles.link}>Pricing</a></li>
          <li><a href="#about" style={styles.link}>About Us</a></li>
          <li onClick={toggleTheme} >Change Theme</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
