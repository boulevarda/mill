import React, { useEffect, useState } from 'react';

/* Inserts email address into mailto link after page load to help reduce 
chance of email address scraping */

type MailtoProps = {
  children: string;
  address: string;
  domain: string;
  subject?: string;
  className?: string;
};
const Mailto = ({
  children,
  address,
  domain,
  subject,
  className,
}: MailtoProps) => {
  const [href, setHref] = useState('');

  useEffect(() => {
    const onPageLoad = () => {
      setHref(`mailto:${address}@${domain}${subject && `?subject=${subject}`}`);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
      return () => {};
    }
    window.addEventListener('load', onPageLoad, false);
    return () => {
      window.removeEventListener('load', onPageLoad);
    };
  }, [address, domain, subject]);

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default Mailto;
