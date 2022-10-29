import React, { useEffect, useState } from 'react';

/* Inserts email address into mailto link after page load to help reduce 
chance of email address scraping */

type MailtoProps = {
  text: string;
  address: string;
  domain: string;
  subject?: string;
  className?: string;
};
const Mailto = ({ text, address, domain, subject, className }: MailtoProps) => {
  const [href, setHref] = useState('');

  useEffect(() => {
    const onPageLoad = () => {
      setHref(`mailto:${address}@${domain}${subject && `?subject=${subject}`}`);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => {
        window.removeEventListener('load', onPageLoad);
      };
    }
  }, [address, domain, subject]);

  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};

export default Mailto;
