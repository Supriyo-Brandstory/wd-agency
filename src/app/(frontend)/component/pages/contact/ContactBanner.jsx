import React from 'react';
import CommonBanner from '../common/CommonBanner';
import bannerimages from '@/app/(frontend)/assets/images/contact/banner.webp';

const ContactBanner = () => {
  return (
    <CommonBanner
      bannerImage={`url(${bannerimages.src})`}
      title="Contact Us"
      subtitle="Ready to start your project? Get in touch with our experts and let's discuss how we can help transform your digital presence."
    />
  );
};

export default ContactBanner;
