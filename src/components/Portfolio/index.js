import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    let heading = "Portfolio"

    const renderPortfolio=()=>{
        //-- watched till 25mins this function wasn't defined in the tutorial yet.......
    }//
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters strArray={heading.split('')} idx={15} lettersClass={letterClass} />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio