'use client'
import Image from 'next/image';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import css from '../../../assets/style/about/mission.module.css';
import LeftArrow from '../../../assets/images/about/left-arrow.png';
import RightArrow from '../../../assets/images/about/right-arrow.png';
import missionbg from '../../../assets/images/about/mission-bg.png';

// position prop is mandatory: 'left' | 'right'
const MissionBox = ({ title, description, position }) => {
    const isLeft = position === 'left';

    // Motion variants for left/right animations
    const containerVariants = {
        hidden: { opacity: 0, x: isLeft ? 50 : -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            className={`w-full frame-1200 flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center justify-between gap-6 md:gap-10`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
        >
            {/* Image Section */}
            <motion.div
                className={`w-1/2 my-100 ${css.image}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Image
                    src={isLeft ? RightArrow : LeftArrow}
                    alt={isLeft ? 'right arrow' : 'left arrow'}
                    className={isLeft ? css.rightArrow : css.leftArrow}
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
             style={{ '--image-mission-bg': `url(${missionbg.src})` }}
                className={`w-1/2 ${css.blurBox} text-white`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
            >
                {title && (
                    <h3 className="fs-38 py-16 md:text-5xl font-extrabold mb-3 md:mb-4 leading-tight">
                        {title}
                    </h3>
                )}
                {description && (
                    <p className="text-base md:text-xl leading-relaxed text-gray-100/90">
                        {description}
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
};

export default MissionBox;

MissionBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']).isRequired,
};
