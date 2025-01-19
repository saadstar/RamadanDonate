import React from 'react';
import "./footer.css";

export const Footer = () => {
  return (
  <footer className="footer">
    <div className="container">
      <ul className="footer-list">
        <li>
          <a href="#" className="footer-link">Terms of use</a>
        </li>

        <li>
          <a href="#" className="footer-link">Privacy & Policy</a>
        </li>

      </ul>

      <p className="copyright">
        Copyright 2025 <a href="#" className="copyright-link">codewithsaad</a>. All Rights Reserved.
      </p>

    </div>
  </footer>
  )
}
