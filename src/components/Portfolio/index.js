import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"
import portfolioData from "../../data/portfolio.json"

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    let heading = "Portfolio"
    console.log(portfolioData)

    useEffect(() => {

        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, []);


    const renderPortfolio = (portfolio) => { //-- functional local component

        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={port.id}>
                                <img src={port.cover} alt={port.title} className="portfolio-image"/>
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn' onClick={()=>{window.open(port.url)}}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    }



    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters strArray={heading.split('')} idx={15} lettersClass={letterClass} />
                </h1>
                <div>{renderPortfolio(portfolioData.Portfolio)}</div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio