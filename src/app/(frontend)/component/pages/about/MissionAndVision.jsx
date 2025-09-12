import css from '../../../assets/style/about/mission.module.css';
import MissionBox from './MissionBox';

const MissionAndVision = () =>{
    return (
        <div className={`mb-40 ${css.missionVisionContainer}`} >
            <MissionBox 
                position="right"
                title="Our Mission" 
                description="To empower businesses across the UAE and beyond with innovative web solutions that drive growth, enhance user experiences, and deliver measurable results. We are committed to excellence in every project we undertake." 
            />
            <div className="h-14 md:h-24" />
            <MissionBox 
                position="left"
                title="Our Vision" 
                description="To be the most trusted and innovative web development partner in the Middle East, known for delivering world-class digital solutions that transform businesses and create lasting value for our clients." 
            />
        </div>
    );
}

export default MissionAndVision;