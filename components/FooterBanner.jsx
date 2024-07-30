import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import Image from 'next/image';

const FooterBanner = ({ footerBanner: { discount, desc, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image } }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Scroll to the middle of the page
    window.scrollTo({
      top: document.body.scrollHeight / 5.7,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" onClick={handleClick}>{buttonText}</button>
          </Link>
        </div>
<<<<<<< HEAD
        <img src={urlFor(image)} alt="product image" className='footer-banner-image' />
=======
        <img src={"/assets/img.png"}
        className='footer-banner-image'/>
>>>>>>> ffcd60a0d7356a30b6217cfda4b0ffe87a7c4413
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default FooterBanner;
=======
export default FooterBanner
>>>>>>> ffcd60a0d7356a30b6217cfda4b0ffe87a7c4413
