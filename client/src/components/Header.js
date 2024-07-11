import React from 'react';
import './Header.css'; // Import the custom CSS file

function Header() {
  return (
    <div className='p-8 bg-primary flex justify-start flex-row items-center gap-10'>
      <img 
        src='/logo.jfif' // Path adjusted to the public folder
        alt='Logo' 
        style={{
          width: '50px', // Adjust the width as needed
          height: '50px', // Set height to match width for round shape
          marginRight: '30rem', // Add space between the image and the text
          borderRadius: '50%', // Make the image round
          objectFit: 'cover' // Ensure the image covers the round shape
        }}
      />
      <h1 className='text-white text-xl font-semibold cursor-pointer hover-line'>About</h1>
      <h1 className='text-white text-xl font-semibold cursor-pointer hover-line'>Experience</h1>
      <h1 className='text-white text-xl font-semibold cursor-pointer hover-line'>Projects</h1>
      <h1 className='text-white text-xl font-semibold cursor-pointer hover-line'>Contact</h1>
    </div>
  );
}

export default Header;
