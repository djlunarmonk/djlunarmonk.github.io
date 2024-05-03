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
                    <a className='resume-contact' href="tel:+46(0)706398343">+46 (0)706-39 83 43</a><br />
                    <a className='resume-contact' href='mailto:jonlundmark@gmail.com'>jonlundmark@gmail.com</a>
                </div>
            </div>)
}

export default ResumeHeader;