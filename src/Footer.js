// Footer.js
// import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        ©{currentYear} Russell Waring
      </div>
    </footer>
  );
}

export default Footer;