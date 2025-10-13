import React from 'react'
import CommonBanner2 from '../../component/pages/common/CommonBanner2'
import imagebanner from '@/app/(frontend)/assets/images/e-commerce-web-development/banner.webp'
import CommonIntroduction from '../../component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/e-commerce-web-development/introimg-1.webp'
import imageintro2 from '@/app/(frontend)/assets/images/e-commerce-web-development/introimg-2.webp'
import CommonWhyMetter from '../../component/pages/common/CommonWhyMetter'
import imagewhymetter from '@/app/(frontend)/assets/images/e-commerce-web-development/whymetterbg.webp'

const page = () => {
    return (
        <>
            <CommonBanner2
                bg={imagebanner}
                heding={"Ecommerce Website Development for <br/>Growing UAE Businesses"}
                subtitle={"Build scalable, user-friendly, and revenue-driven online stores with WD Agency."}

            />
            <CommonIntroduction
                text1={` <p>The online retail sector in the UAE is booming as recent reports indicate that online sales in the region will surpass $17 billion by 2025, and aided by a tech-savvy and convenience-driven population. The UAE has reached a mobile-first ecommerce economy, with 98% internet penetration and practically every adult possessing a smartphone. </p>
                    <p>The shopper experience in the UAE is more than simple online shopping—it demands smarter online shopping. Shoppers want fast-loading websites, secure methods of payment, and the option to choose different languages, currencies, and seamless product delivery. Companies that don’t provide these simple shopping experiences will quickly lose out to competitors offering these experiences. </p>
                    `}
                text2={`  <p>While solutions such as Shopify, WooCommerce, or Magento provide easy-to-manage ecommerce set up, at the end of the day, the vast majority of DIY stores don’t provide the customization, scalability, or security that a business really needs. Stores using templates may look reasonable, they rarely represent a brand and fail when it gets complicated - managing thousands of SKUs, logistics development, or more complex multi-currency payments, for example, really needs a custom ecommerce development solution. </p>
                <p>At WD Agency, we understand the unique needs of UAE businesses. From integrating local payment gateways to creating bilingual websites in Arabic and English, we build platforms designed for growth in one of the world’s most dynamic ecommerce landscapes.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonWhyMetter
            imagewhymetter={imagewhymetter}
                heding={'Why Ecommerce Website Development Matters in UAE'}
                subheding={'The online retail sector in the UAE is booming as recent reports indicate that online sales in the region will surpass $17 billion by 2025, and aided by a tech-savvy and convenience-driven population. The UAE has reached a mobile-first ecommerce economy, with 98% internet penetration and practically every adult possessing a smartphone.'}
                lefttext={`  <p>The shopper experience in the UAE is more than simple online shopping—it demands smarter online shopping. Shoppers want fast-loading websites, secure methods of payment, and the option to choose different languages, currencies, and seamless product delivery. Companies that don’t provide these simple shopping experiences will quickly lose out to competitors offering these experiences.</p>
                        <p>At WD Agency, we understand the unique needs of UAE businesses. From integrating local payment gateways to creating bilingual websites in Arabic and English, we build platforms designed for growth in one of the world’s most dynamic ecommerce landscapes.</p>
`}
                righttext={`<p>While solutions such as Shopify, WooCommerce, or Magento provide easy-to-manage ecommerce set up, at the end of the day, the vast majority of DIY stores don’t provide the customization, scalability, or security that a business really needs. Stores using templates may look reasonable, they rarely represent a brand and fail when it gets complicated - managing thousands of SKUs, logistics development, or more complex multi-currency payments, for example, really needs a custom ecommerce development solution.</p>
`}
            />
        </>
    )
}

export default page