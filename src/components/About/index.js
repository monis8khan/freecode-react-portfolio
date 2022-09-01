import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    let heading = 'About Me'

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000)
    }, [])
    return (
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={heading.split('')} idx={15} lettersClass={letterClass} />
                </h1>
                <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. I can integrate 3rd party applications in your wix website using rest APIs. I can create custom functionality using wix-collections & velo code.</p>
                <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. I can integrate 3rd party applications in your wix website using rest APIs. I can create custom functionality using wix-collections & velo code.</p>
                <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. I can integrate 3rd party applications in your wix website using rest APIs. I can create custom functionality using wix-collections & velo code.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#dd0031"></FontAwesomeIcon>
                    </div>

                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"></FontAwesomeIcon>
                    </div>

                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"></FontAwesomeIcon>
                    </div>

                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"></FontAwesomeIcon>
                    </div>

                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"></FontAwesomeIcon>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"></FontAwesomeIcon>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About