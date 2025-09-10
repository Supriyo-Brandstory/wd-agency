import React from 'react'
import ContactBanner from '../../component/pages/contact/ContactBanner'
import ContactForm from '../../component/pages/contact/ContactForm'
import ContactInformation from '../../component/pages/contact/ContactInformation'
import ContactWhyChooseUs from '../../component/pages/contact/ContactWhyChooseUs'
import ContactFaq from '../../component/pages/contact/ContactFaq'

const page = () => {
  return (
    <>
    <ContactBanner/>
    <ContactForm/>
    <ContactInformation/>
    <ContactWhyChooseUs/>
    <ContactFaq/>
    </>
  )
}

export default page