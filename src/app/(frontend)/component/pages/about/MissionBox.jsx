import Image from 'next/image';
import PropTypes from 'prop-types';
import css from '../../../assets/style/about/mission.module.css';
import LeftArrow from '../../../assets/images/about/left-arrow.png';
import RightArrow from '../../../assets/images/about/right-arrow.png';

// position prop is mandatory: 'left' | 'right'
const MissionBox = ({ title, description, position }) =>{
    const isLeft = position === 'left';

    return (
        <div className={`w-full frame-1200 flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center justify-between gap-6 md:gap-10`}>
            <div className={`w-1/2 my-100 ${css.image}`}>
                <Image 
                    src={isLeft ? RightArrow : LeftArrow} 
                    alt={isLeft ? 'right arrow' : 'left arrow'} 
                    className={isLeft ? css.rightArrow : css.leftArrow} 
                />
            </div>
            <div className={`w-1/2 ${css.blurBox} text-white`}>
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
            </div>
        </div>
    );
}

export default MissionBox;

MissionBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']).isRequired,
};