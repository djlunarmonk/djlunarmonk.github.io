import './Resume.css';
import { resume } from '../../cv.json';
import ResumeSection from './ResumeSection/ResumeSection';
import ResumeHeader from './ResumeHeader/ResumeHeader';

const Resume = () => {

    return(<div className='resume'>
            <div className='resume-paper'>
            <ResumeHeader personals={resume.personals} />
            { resume.sections.map( (item, index) => <ResumeSection key={index} section={item} />)}
            </div>
        </div>
    )
}

export default Resume;
