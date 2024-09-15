import headshot from '../../../assets/jonlundmark.png';

const ResumeHeader = ({personals}) => {



    return( <div className='resume-section' id="0">
                <div className="resume-header-header">
                    <img className='headshot' src={headshot} alt="Portrait photo"/>
                </div>
                <div className="resume-header-personals">
                    <h1>{personals.name}</h1>
                    <div className='birthdate'>{personals.birthdate}</div>
                    <p className='snailmail'>
                        {personals.snailmail.address}<br />
                        {personals.snailmail.zipcode}&nbsp;{personals.snailmail.city}
                    </p>
                    <a className='resume-contact' href={'tel:' + personals.phone.link}>{personals.phone.text}</a><br />
                    <a className='resume-contact' href={'mailto:' + personals.email}>{personals.email}</a><br />
                    <a className='resume-contact' id='linkedin' href={personals.linkedin}>LinkedIn</a><br />
                    <a className='resume-contact' id='github' href={personals.github}>GitHub</a>
                </div>
            </div>)
}

export default ResumeHeader;