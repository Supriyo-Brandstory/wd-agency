import React from 'react'
import imagebanner from '@/app/(frontend)/assets/images/portfolio-web-development/main-banner-portfolio-website.webp'
import CommonBanner2 from '@/app/(frontend)/component/pages/common/CommonBanner2'
import CommonIntroduction from '@/app/(frontend)/component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/portfolio-web-development/portfolio-website-design.webp'
import imageintro2 from '@/app/(frontend)/assets/images/portfolio-web-development/portfolio-web-design-agency.webp'
import CommonSetsUs from '@/app/(frontend)/component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/abu-dhabi/setusbg.webp'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'
import commonimage1 from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import commonimage2 from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import commonimage3 from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import commonimage4 from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import commonimage5 from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import commonimage6 from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonIndustries from '@/app/(frontend)/component/pages/common/CommonIndustries'
import CommonAboutPage2 from '@/app/(frontend)/component/pages/common/CommonAboutPage2'
import Aboutimg from '@/app/(frontend)/assets/images/abu-dhabi/about-2.webp'
import CommonTechnologyStack from '@/app/(frontend)/component/pages/common/CommonTechnologyStack'
import react from "@/app/(frontend)/assets/images/reacticon.svg";
import nodejs from "@/app/(frontend)/assets/images/nodejsicon.svg";
import laravel from "@/app/(frontend)/assets/images/laravelicon.svg";
import wordpress from "@/app/(frontend)/assets/images/wordpressicon.svg";
import magento from "@/app/(frontend)/assets/images/magentoicon.svg";
import shopify from "@/app/(frontend)/assets/images/shopifyicon.svg";
import flutter from "@/app/(frontend)/assets/images/fluttericon.svg";
import reactnative from "@/app/(frontend)/assets/images/reactnativeicon.svg";
import php from "@/app/(frontend)/assets/images/phpicon.svg";
import python from "@/app/(frontend)/assets/images/pythonicon.svg";
import aws from "@/app/(frontend)/assets/images/awsicon.svg";
import mongo from "@/app/(frontend)/assets/images/mongodbicon.svg";
import CommonDevelopmentProcess from '@/app/(frontend)/component/pages/common/CommonDevelopmentProcess'
import CommonWhyWebsiteDevelopment from '../../../assets/style/common/CommonWhyWebsiteDevelopment'
import imagewhydevelopment from '@/app/(frontend)/assets/images/e-commerce-web-development/Why-Website-Development.webp'
import CommonClientTestimonials from '../../../component/pages/common/CommonClientTestimonials'
import imagetestimonial1 from '@/app/(frontend)/assets/images/testimonial/testimonial-1.webp'
import imagetestimonial2 from '@/app/(frontend)/assets/images/testimonial/testimonial-2.webp'
import imagetestimonial3 from '@/app/(frontend)/assets/images/testimonial/testimonial-3.webp'
import CommonFaqSection from '../../../component/pages/common/CommonFaqSection'
import CommonServiceLocations from '../../../component/pages/common/CommonServiceLocations'

const page = () => {
    return (
        <>
            <CommonBanner2
                bg={imagebanner}
                heding={"Website Migration Services in Dubai for </br>Smooth, Secure Transitions"}
                subtitle={"Experience hassle-free website migration in Dubai with WD Agency. We ensure your website </br>moves seamlessly to a new platform or server, keeping your data safe, & performance intact."}

            />
            <CommonIntroduction
                heding={'Website Migration for Uninterrupted Online Success'}
                text1={` <p>Website migration is an essential move for online businesses that want to raise their digital profile, improve performance, or adopt modern platforms. If you’re transferring to a new CMS, changing your domain, or moving to a different hosting environment, a migration that is done right will keep your business operations running without any downtime and your SEO efforts safe.</p>
                    <p>At WD Agency, we realize that a migration is not only about relocating files, but it is also about keeping the brand and the digital identity the same. Our professionals don’t leave anything to chance and they plan down to the smallest detail the entire process, they check the structure, data, and the content of your site to make sure that everything is going to be transferred perfectly.</p>
                    `}
                text2={`  <p>We do not forget to keep SEO at the center point by doing proper redirects, changing metadata, and protecting rankings. Our strategy is that organic traffic does not reduce, and users get the same experience.</p>
                <p>If you were scaling your business, changing the website structure, or modernizing your digital ecosystem, the flawless migration we perform would be the guarantee that your growth is not stopped. With WD Agency, it is not just a move that you do with your website, it is a lift to make it perform better, be more reliable, and have success that lasts.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Website Migration Services for Startups, SMBs, & Enterprises'}
                text2={'WD Agency is customer-centric and uses the most suitable techniques for a website migration, irrespective of the business size. Our team ensures a smooth, fast, and secure website migration, handling all aspects of the process so your site remains fully functional and uninterrupted.<br> </br>We cut out unnecessary steps and get you directly to your goals if you are a startup upgrading your platform or need to transfer your domain. Thus, you get to focus on the growth of your business, while we take care of the technical aspects.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'Safe, Efficient, and SEO-Friendly Website Migration'}
                text2={"We don't just promise, we actually deliver a migration handled with a high degree of skill and attention throughout the whole level, be it backend architecture or SEO."}
                boxdata={[
                    { id: 1, img: commonimage2, title: 'Minimal Downtime', desc: 'Your website remains accessible to the end users during the migration, with no noticeable disruption to visitors or your business operations.' },
                    { id: 2, img: commonimage1, title: 'SEO Preservation', desc: 'We are very thorough in redirect mapping, canonical tag updating, and continuing with the change URLs to ensure that your search engine rankings and the visibility you have worked for face, no harm.' },
                    { id: 3, img: commonimage3, title: 'Data Security', desc: 'Keeping your website safe and user data private is the core principle for us. We employ secure transfer protocols and make sure no data is lost.' },
                    { id: 4, img: commonimage5, title: 'Expert Handling', desc: 'Our skilled team executes every migration carefully and efficiently, whether it’s a CMS upgrade, an e-commerce transition, or a large-scale data transfer.' },
                    { id: 5, img: commonimage4, title: 'Performance Optimization', desc: 'We ensure your website is fully optimized post-migration, maintaining fast loading speeds and smooth functionality across all devices.' },
                    { id: 6, img: commonimage6, title: 'Compatibility Checks', desc: 'Every feature, plugin, and integration is thoroughly tested after migration to guarantee seamless operation on the new platform.' },
                ]}
            />
             <CommonDevelopmentProcess
                heding={'Website Migration Services for Businesses'}
                subheding={'WD Agency provides the full spectrum of website migration services in Dubai to meet the specific needs of your business. Our method is a combination of careful planning, cutting-edge technologies, and technical accuracy to guarantee a hand-off that is smooth and without any loss of data or drop in ranking in search results.'}
                processData={[
                    {
                        id: "01",
                        title: "Platform Migration",
                        description: `Move your site straight away from WordPress, Joomla, Drupal, or custom platforms with complete data integrity and zero downtime.`,
                    },
                    {
                        id: "02",
                        title: "Domain Migration",
                        description: `Use or rebrand your domain name and keep SEO rankings, traffic, and user experience through well-planned redirect mapping.`,
                    },
                    {
                        id: "03",
                        title: "Server Migration",
                        description: `Transfer your website between two hosting providers or from one server to the cloud without any downtime and with the help of a perfectly optimized configuration.`,
                    },
                    {
                        id: "04",
                        title: "E-commerce Migration",
                        description: `Ensure your product catalogs, customer profiles, and order histories remain intact when you switch to a new platform or upgrade your current one.`,
                    },
                    {
                        id: "05",
                        title: "CMS Upgrades & Migration",
                        description: `Change the content management system of your website to a newer one without losing the structure or data, and be assured of improved flexibility and performance.`,
                    },
                    {
                        id: "06",
                        title: "Database Migration",
                        description: `Move all content, media, and databases accurately, and at the same time maintain the relationships between files and data consistency.`,
                    }

                    ]} />

            <CommonAboutPage2
                text1="Best Website Migration Agency in Dubai </br>WD Agency"
                text2={`
                            <p class="mb-20">
                            Moving data is only one part of a successful migration- the main goal is to ensure long-term stability and peak performance. WD Agency picks up from where the basics leave off by offering a suite of additional services that make your website migration process better. 
                            </p>
                            <ul>
                            <li><strong>Pre-Migration Analysis:</strong> Our team evaluates site architecture which helps in spotting potential problems and drafting a tailor-made migration plan.</li>
                            
                            <li><strong>Post-Migration QA:</strong> We conduct thorough quality assurance checks after the migration to ensure that everything has been done correctly.</li>
                            
                            <li><strong>Redirect Mapping:</strong> It is our responsibility to facilitate the transition from the old URLs to the new ones while keeping intact the SEO value, traffic, and user experience.</li>
                            
                            <li><strong>Maintenance & Support:</strong> We provide uninterrupted monitoring, bug fixes, and optimization services to keep your website running smoothly.</li>
                            </ul>
                            <p>
                            WD Agency is your go-to website migration service provider in the UAE, taking you beyond the finish line of your migration process to the point where it’s flawless.
                            </p>
                    `}
                img={Aboutimg}
            />
      
                    <CommonWhyWebsiteDevelopment
                    heding={"Why Choose Our Website Migration Services"}
                    subheding={"Migrating your website is more than just transferring data, it’s about preserving your digital identity, performance, and search visibility. WD Agency ensures every aspect of your migration is handled with precision, security, and strategy. Here’s why businesses trust us for their website transitions:"}
                    lefttext={`<ul>
                                <li><strong>Minimal Downtime:</strong> We know that a standstill may cost you the traffic, sales, and the trust you have built over time. Hence, our migration specialists are always on the move with their well-planned strategy, which greatly reduces the risk of any interruption.</li>
                                
                                <li><strong>Secure Data Transfer:</strong> We place security at the center of our operations. Regardless if the data we are transferring is about users or customers, or even if it is confidential content, we always prefer encrypted transfer protocols and implement highly secure access controls. </li>

                                <li><strong>Expert Support:</strong> Even after the launch of your site, we keep in touch through our communication, provide you with detailed reports, and give continuous support. </li>
                                </ul>

                                <p>Partnering with WD Agency, you get an expert team that blends the technical know-how, the SEO knowledge, and the performance optimization skills- hence your brand-new online setting will be more powerful, quicker, and prepared for the future.</p>
                            `}
                    rightimage={imagewhydevelopment}

                    />
                    <CommonIndustries />
                    <CommonClientTestimonials
                    testimonials={[
                        {
                            id: 1,
                            name: "Daniel R",
                            text: "WD Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
                            image: imagetestimonial1,
                        },
                        {
                            id: 2,
                            name: "Sophia K",
                            text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
                            image: imagetestimonial2,
                        },
                                            {
                            id: 3,
                            name: "James P",
                            text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
                            image: imagetestimonial3,
                        }
                    ]}  
                    />
                    <CommonServiceLocations/>
                    <CommonFaqSection
                        faqs={[
                            {
                                q: "Why Would My Business Need a Website Migration?",
                                a: "You may migrate to improve website performance, upgrade your platform or CMS, switch to better hosting, or enhance security and user experience."
                            },
                            {
                                q: "Will My Website be Down During The Migration?",
                                a: "No, we do a proper planning before website migration to keep your website accessible. Your website stays accessible to visitors, ensuring minimal disruption to users and your business."
                            },
                            {
                                q: "Can My SEO Rankings be Affected During Migration?",
                                a: "If not done carefully, they can be. A professional migration includes redirects, URL updates, and SEO best practices to protect your search rankings."
                            },
                            {
                                q: "How Long Does a Website Migration Take?",
                                a: "It depends on your site’s size and complexity. Small websites may take a few hours, while larger sites or e-commerce platforms could take several days."
                            },
                            {
                                q: "Will My Website Data and Content be Safe?",
                                a: "Yes, using secure transfer methods and multiple backups, your content and user data remain protected throughout the migration."
                            },
                            {
                                q: "Will My Website Work Properly after Migration?",
                                a: "Yes, after migration, the site is tested for speed, functionality, compatibility, and integrations to ensure everything runs smoothly."
                            }]}
                        />

        </>

    )
}

export default page