import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

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
                    <AnimatedLetters strArray={heading.split('')} idx={15} lettersClass={letterClass}/>
                </h1>
                <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. I can integrate 3rd party applications in your wix website using rest APIs. I can create custom functionality using wix-collections & velo code.</p>
                <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. I can integrate 3rd party applications in your wix website using rest APIs. I can create custom functionality using wix-collections & velo code.</p>
                <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. I can integrate 3rd party applications in your wix website using rest APIs. I can create custom functionality using wix-collections & velo code.</p>
            </div>

        </div>
    )
}

export default About