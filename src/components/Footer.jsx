import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Disclaimer: I am not responsible for any offers or promotions listed on this site.
        Please read all terms and conditions carefully before participating in any offer.
      </p>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;