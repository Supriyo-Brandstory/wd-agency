import React from 'react'
import imagebanner from '@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-banner.webp'
import CommonBanner2 from '@/app/(frontend)/component/pages/common/CommonBanner2'
import CommonIntroduction from '@/app/(frontend)/component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/wireframing-prototyping/website-ux-design-1.webp'
import imageintro2 from '@/app/(frontend)/assets/images/wireframing-prototyping/website-ux-design-2.webp'
import CommonSetsUs from '@/app/(frontend)/component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/wireframing-prototyping/website-design-agency-wireframing.webp'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'
import commonimage1 from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import commonimage2 from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import commonimage3 from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import commonimage4 from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import commonimage5 from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import commonimage6 from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonIndustries from '@/app/(frontend)/component/pages/common/CommonIndustries'
import CommonAboutPage2 from '@/app/(frontend)/component/pages/common/CommonAboutPage2'
import Aboutimg from '@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-prototyping-design.webp'
import CommonDevelopmentProcess from '@/app/(frontend)/component/pages/common/CommonDevelopmentProcess'
import CommonWhyWebsiteDevelopment from '../../../assets/style/common/CommonWhyWebsiteDevelopment'
import imagewhydevelopment from '@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-protyping-process.webp'
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
                heding={"Wireframing and Prototyping Services Dubai</br> for Seamless Digital Experiences"}
                subtitle={"WD Agency transforms ideas into interactive blueprints and prototypes that guide </br>flawless development. We are the Dubai’s leading UI/UX design agency."}

            />
            <CommonIntroduction
                heding={'We Visualize, Validate, and Optimize Before Development'}
                text1={` <p>Wireframing and prototyping are the necessary stages of digital product design through which companies plan user flows, interactions, and functionalities prior to the commencement of coding. At WD Agency, we deliver prototypes that are not only clear and interactive but also realistic to make sure that your website or app meets users’ expectations and achieves business goals.</p>
                    <p>By conceptualizing your idea our team recognizes potential design problems, works out the navigation, and confirms that every element has its function. Wireframes are your digital product's skeleton, they show the layout, the hierarchy, and the areas of content, while prototypes turn them alive with the simulated interactions that directly refer to the final user experience.</p>
                    `}
                text2={`  <p>Wireframes and prototypes we produce for you are the stepping stones between the idea and the actual work, be it for a new digital product or an existing one you want to overhaul. We work with you to comprehend the objectives, audience, and the necessary functionalities and then convert the ideas into performing designs.</p>
                <p>At WD Agency, great design starts with great planning, and our prototypes are the roadmaps to success of your product. We give you the ability to go from dream to actuality with assurance and with clear understanding by formalizing the design through the accurate visual representation and strategic design validation.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Best Wireframing & Prototyping Services'}
                text2={'We create high-impact wireframe designs to get your idea off the ground quickly. These wireframes make it easy to decide and get investors on board. You do not need to spend money on development just to be able to test functionality, present your concept, and get product roadmap alignment. <br></br>Our interactive prototypes guarantee that each design feature is in line with your business goals and customer requirements. We work with you to upgrade the usability, simplify the navigation, and provide a consistent experience across all devices, thus your digital platform becomes truly user-focused. We create solid, scalable prototypes that ease complicated workflows and cut down on rework for enterprises.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'Plan, Visualize, and Perfect Your Digital Product'}
                text2={"WD Agency operates on the premise that digital products of the highest quality are the result of a detailed plan. It is our wireframing and prototyping services which are most closely associated with these values. Focus is placed on clarity, usability and collaboration thus facilitating the digital experience which is designed to perform flawlessly."}
                boxdata={[
                    { id: 1, img: commonimage2, title: 'Design Clarity', desc: 'The visual guidelines for your product serve as a foundation for teams to identify issues early. This prevents costly mistakes, shortens timelines, and ensures every design decision adds measurable value before development begins.' },
                    { id: 2, img: commonimage1, title: 'Interactive Prototype', desc: 'Experience your app or website before it is built. Our fully clickable prototypes simulate real interactions, allowing clients to test usability, flow, and engagement in a tangible way.' },
                    { id: 3, img: commonimage3, title: 'User-Centric Design', desc: 'Every design is based on research and adheres to UX best practices. We analyze user behavior and navigation patterns to craft intuitive experiences that enhance satisfaction and boost conversions.' },
                    { id: 4, img: commonimage5, title: 'Collaboration-Friendly', desc: 'Our transparent design process promotes smooth collaboration among stakeholders, developers, and designers. With shared access and real-time feedback, teams can make informed decisions and achieve a seamless final product.' },
                    { id: 5, img: commonimage4, title: 'Iterative Testing', desc: 'We continually refine prototypes based on feedback and usability tests, ensuring that the final product evolves into its most effective and engaging version.' },
                    { id: 6, img: commonimage6, title: 'Scalable Frameworks', desc: 'All wireframes and prototypes are structured to support future growth, allowing for effortless scalability as your business and digital needs expand.' },
                ]}
            />
            <CommonAboutPage2
                text1="Transform Ideas into Actionable Designs with WD Agency"
                text2={`
                            <p class="mb-20">
                            Our wireframing and prototyping services are designed to bring structure, transparency, and precision to your digital projects. At WD Agency, we have hands-on experience on building: 
                            </p>
                            <ul>
                            <li><strong>Low-Fidelity Wireframes-</strong> Simple drawings and layouts used for establishing the basic framework, user flows, and content hierarchy of a project in an early-stage planning.</li>
                            
                            <li><strong>High-Fidelity Wireframes-</strong> Elaborate graphical depictions that show the use of typography, colors, icons, and branding for a closer-to-final visualization.</li>
                            
                            <li><strong>Interactive Prototypes-</strong> The interaction and animation of the prototypes that simulate the real-world user interactions, thus allowing testing the product before the development phase.</li>
                            
                            <li><strong>User Flow Mapping-</strong> An in-depth illustration of how users navigate through the pages or screens, thus guaranteeing easy navigation and user-friendly experiences.</li>
                            </ul>
                            <p>
                            The designs we create are responsive on mobile, tablet, and desktop, thus we guarantee that the performance will be the same on all devices.
                            </p>
                    `}
                img={Aboutimg}
            />
       <CommonDevelopmentProcess
                heding={'From Concept to Interactive Prototype'}
                subheding={'At WD Agency, our wireframing and prototyping workflow is organized, open, and cooperative. Each step is guided by clear communication and shared insights to ensure alignment among teams. From initial sketches to interactive mockups, we turn ideas into structured visual plans that set the foundation for flawless development:'}
                processData={[
                    {
                        id: "01",
                        title: "Requirement Analysis",
                        description: `First, we understand business goals, target users, and product vision to build a strong foundation.`,
                    },
                    {
                        id: "02",
                        title: "Low-Fidelity Wireframes",
                        description: `Designers sketch out a basic layout, navigation flow, and main areas, thus defining the user journey.`,
                    },
                    {
                        id: "03",
                        title: "High-Fidelity Wireframes",
                        description: `Next, we beautify the UI with detailed components, content hierarchy, and branding elements.`,
                    },
                    {
                        id: "04",
                        title: "Interactive Prototyping",
                        description: `We replicate actual interactions, clicks, scrolls, transitions- with the help of modern tools to show how users will work with the product.`,
                    },
                    {
                        id: "05",
                        title: "User Testing & Feedback",
                        description: `Prototypes are tested with real users and stakeholders to detect usability gaps and collect valuable insights.`,
                    },
                    {
                        id: "06",
                        title: "Iteration & Finalization",
                        description: `We adjust and improve the design based on the feedback until it meets performance, clarity, and engagement criteria.`,
                    }

                    ]} />
                    <CommonWhyWebsiteDevelopment
                    heding={"Why Our Wireframing & Prototyping Services Stand Out"}
                    subheding={"Working with WD Agency means that you choose to have clarity, collaboration, and creative excellence. With our wireframing and prototyping services, your business gets a visual lead- where vague ideas are made into validated, user-approved experiences without the need to develop first."}
                    lefttext={`<ul>
                                <li><strong>Reduce Errors:</strong> Our wireframes serve as a truly detailed plan for developers. By rectifying design inconsistencies, feature overlaps, and usability issues at the early stage, you leave behind the situation of making costly corrections after the launch and also of redoing the work during the coding phase.</li>
                                
                                <li><strong>Faster Decision-Making:</strong> Stakeholders can see for themselves the end product through interactive prototypes. This precise visualization they get speeds up their talking points, lessens confusion, and leads to quicker agreements among business, design, and tech teams.</li>
                                
                                <li><strong>Time-Saving Design Validation:</strong> It supports early validation through the use of clickable prototypes, in that it helps spot the weak points of a product before they turn into costly fixes. It is a measure that also cuts down on the redundant work, expedites the process of getting approvals, and, thus, ensures that your product enters the stage of development.</li> 
                                </ul>
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
                                q: "Why Do I Need Wireframing before Designing My Website?",
                                a: "Wireframing helps you plan the layout and structure of your website or app before investing in design or development. It gives you a clear idea of how each section will look and function."
                            },
                            {
                                q: "What is The Difference Between a Wireframe and a Prototype?",
                                a: " A wireframe is a basic visual outline showing where things will go on a page, while a prototype is a clickable, interactive version that shows how users will interact with the site or app."
                            },
                            {
                                q: "How Does Wireframing Save Time and Cost in a Project?",
                                a: "By spotting design or usability issues early, wireframing prevents expensive changes later in development. It ensures everyone agrees on the structure before coding begins."
                            },
                            {
                                q: "Can I Give Feedback During the Wireframing and Prototyping Stage?",
                                a: "Yes, absolutely, This stage is all about collaboration. You can review layouts, suggest changes, and test interactions before finalizing the design."
                            },
                            {
                                q: "Do Prototypes Look Exactly Like The Final Website?",
                                a: "Not always- they’re built to demonstrate functionality and flow, but not the final visuals. However, high-fidelity prototypes can look very close to the finished product."
                            },
                            {
                                q: "How Long Does The Wireframing and Prototyping Process Take?",
                                a: "It depends on project size and complexity, but most wireframes and prototypes are completed within a few days to a few weeks."
                            },
                            {
                                q: "Is Wireframing and Prototyping Useful for Redesigning an Existing Website?",
                                a: "Definitely, it helps identify what’s working and what’s not, allowing you to plan improvements and test new layouts before committing to a full redesign."
                            }]}
                        />

        </>

    )
}

export default page