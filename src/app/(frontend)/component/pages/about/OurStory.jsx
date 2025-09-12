import Image from "next/image";
import OurStoryImage from '@/app/(frontend)/assets/images/about/our-story.jpg';

const OurStory = () => {
    return (
        <div className="frame-1200 py-100 sm-pb-50 sm-px-20 sm-pt-0">
            <h2 className="my-40 text-center fs-38">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* left section image */}
                <div className="relative h-[300px] md:h-auto">
                    <Image
                        src={OurStoryImage}
                        alt="Our Story"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
                {/* right section text */}
                <div>
                    <p className="mb-10">
                        Founded over a decade ago, WebsiteDevelopmentAgency.ae has grown from a small startup to one of the most trusted web development companies in the UAE. Our journey began with a simple mission: to help businesses establish a powerful online presence through innovative web solutions.
                    </p>
                    <p className="mb-10">
                        Over the years, we have evolved alongside the digital landscape, continuously adapting our skills and technologies to meet the changing needs of our clients. From small local businesses to large enterprises, we have successfully delivered hundreds of projects across various industries.
                    </p>
                    <p className="mb-10">
                        Today, we are proud to be recognized as industry leaders, with a team of 50+ experienced professionals who are passionate about creating exceptional digital experiences that drive real business results.
                    </p>
                    <button className="blue-btn">
                        Enquiry Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
