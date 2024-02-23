import React, { useState } from 'react';
import './footer.scss';
import data from '../config/social-links.json';

export function FooterSection() {
  const [socialLinksData, setSocialLinksData] =
    useState(data);
  console.log(socialLinksData.socialLinks);
  const socialLinks = socialLinksData.socialLinks;

  return (
    <div className='social'>
      <div className='social-title'>
        <h2>Connect With Me</h2>
      </div>

      <div className='social-body'>
        {socialLinks.map((link, index) => (
          <a
            href={link?.link}
            className={link?.className}
            target='_blank'
          >
            <p>{link?.name}</p>
            <img src={link?.iconLink}></img>
          </a>
        ))}
      </div>

      <div className='footer'>
        <p>
          Built from scratch with <span>❤</span> ©
          Copyright 2022, Mohib Shaik. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
