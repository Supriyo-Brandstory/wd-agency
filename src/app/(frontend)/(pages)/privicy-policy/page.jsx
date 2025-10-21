import React from 'react'
import styles from '@/app/(frontend)/assets/style/policy/policy.module.css'
import Image from 'next/image'
import bannerbg from "@/app/(frontend)/assets/images/blog-bg.webp";

const bgurl = typeof bannerbg === 'string' ? bannerbg : bannerbg?.src

const page = () => {
  return (
    <>
      {/* BANNER */}
            <div className={styles.banner} style={{ "--bg": `url(${bgurl}) no-repeat center center / cover` }}>
                <h1 className={styles.heading}>Privicy Policy</h1>
                <p>Our Privacy Policy is a set of guidelines that explains how we collect, use, and share your personal information.</p>
            </div>
                  {/* PRIVACY POLICY CONTENT */}
      <section className={`frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 sm-pt-0 ${styles.content}`}>
        <div className="container">
          <h2>Privacy Policy</h2>
          <p>
            At <strong>WebsiteDevelopmentAgency.ae</strong>, your privacy is our top priority. 
            This Privacy Policy explains how we collect, use, disclose, and protect your 
            personal information when you visit our website or use our services. 
            By accessing our website, you agree to the terms outlined below.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal and non-personal information in the following ways:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> Such as your name, email address, phone number, and company details when you fill out forms or contact us.</li>
            <li><strong>Technical Information:</strong> Including your IP address, browser type, device information, and browsing behavior collected via cookies and analytics tools.</li>
            <li><strong>Communication Data:</strong> Records of correspondence, inquiries, and feedback you provide through our website or email.</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            The information we collect is used for purposes such as:
          </p>
          <ul>
            <li>Providing and improving our web development and digital services.</li>
            <li>Responding to your inquiries and project requests.</li>
            <li>Sending updates, promotions, or newsletters (only with your consent).</li>
            <li>Analyzing website performance and enhancing user experience.</li>
          </ul>

          <h3>3. Cookies and Tracking Technologies</h3>
          <p>
            Our website uses cookies and similar tracking tools to understand how visitors 
            interact with our site. You can manage or disable cookies through your browser settings, 
            though this may affect certain functionalities of our website.
          </p>

          <h3>4. Data Protection and Security</h3>
          <p>
            We implement strong technical and organizational measures to safeguard your 
            information from unauthorized access, disclosure, or misuse. However, please 
            note that no online data transmission is entirely secure.
          </p>

          <h3>5. Sharing of Information</h3>
          <p>
            We do not sell, rent, or trade your personal data. Information may be shared 
            only with trusted service providers or partners who assist us in operating our 
            business — all bound by confidentiality agreements.
          </p>

          <h3>6. Third-Party Links</h3>
          <p>
            Our website may contain links to external websites. We are not responsible for 
            the privacy practices or content of third-party sites and encourage you to review 
            their respective privacy policies.
          </p>

          <h3>7. Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal information. 
            To exercise these rights, please contact us using the details below.
          </p>

          <h3>8. Updates to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. The revised version will 
            be posted on this page with the updated date.
          </p>

          <h3>9. Contact Us</h3>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Website Development Agency</strong><br />
            Dubai, United Arab Emirates<br />
            Email: <a href="mailto:info@websitedevelopmentagency.ae">info@websitedevelopmentagency.ae</a><br />
            Website: <a href="https://websitedevelopmentagency.ae" target="_blank" rel="noopener noreferrer">
              www.websitedevelopmentagency.ae
            </a>
          </p>

          <p><em>Last updated: October 21, 2025</em></p>
        </div>
      </section>

    </>
  )
}

export default page