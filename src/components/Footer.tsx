import React from 'react';
import '../styles/Footer.scss';

const Navbar: React.FC = () => {
  return (
    <div className="footer">
        <img src={process.env.PUBLIC_URL + "/assets/logo_bw.png"} alt="Logo Kasa" />
        <p className='copyright'>© 2024 Kasa. All rights reserved</p>
    </div>
  );
};

export default Navbar;
