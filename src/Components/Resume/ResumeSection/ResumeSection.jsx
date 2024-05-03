import ResumeMerit from "../ResumeMerit/ResumeMerit";

const ResumeSection = ({section}) => {


    return( <div className='resume-section' id={section.title}>
                <div className="resume-section-header">
                    { section.title }
                </div>
                <div className="resume-section-body">
                    { (section.merits == null) ? <p>{section.body}</p> :
                    section.merits.map( (merit, index) =>
                       <ResumeMerit index={index} merit={merit} /> ) }
                </div>
            </div>)
}

export default ResumeSection;