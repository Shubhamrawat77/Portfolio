import React from 'react'

function Footer() {
    let year= new Date().getFullYear();
  return (
    <div className='mt-8'>
      <p className='p-10 text-center text-sm'>
          © Copyright © {year} All rights reserved | This Portfolio made by Shubham Rawat
      </p>
    </div>
  );
}

export default Footer