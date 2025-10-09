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
                description="To empower businesses with next-level website and software solutions. We are known for creating world-class websites that transform businesses and create real business impact for our clients." 
            />
        </div>
    );
}

export default MissionAndVision;