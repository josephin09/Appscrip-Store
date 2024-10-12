import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h4>CALL US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className={styles.currency}>
          <h4>CURRENCY</h4>
          <Image src="/assets/US.png" alt="Search" width={24} height={24} />
          <p>USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
        <div className={styles.links}>
          <h4>mettä muse</h4>
          <a href="#">About Us</a>
          <a href="#">Stories</a>
          <a href="#">Artisans</a>
          <a href="#">Boutiques</a>
          <a href="#">Contact Us</a>
          <a href="#">EU Compliances Docs</a>
        </div>
        <div className={styles.quickLinks}>
          <h4>QUICK LINKS</h4>
          <a href="#">Orders & Shipping</a>
          <a href="#">Join/Login as a Seller</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className={styles.social}>
          <h4>FOLLOW US</h4>
          <Image src="/assets/Frame 28.png" alt="Search" width={52} height={32} />
        </div>
      </div>
      <div className={styles.payment}>
        <h4>mettä muse ACCEPTS</h4>
        <div className={styles.paymentIcons}>
        <Image src="/assets/Frame 136278.png" alt="Search" width={330} height={35} />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
