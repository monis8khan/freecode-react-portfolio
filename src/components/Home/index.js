import LogoTitle from '../../assets/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v'];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters lettersClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters lettersClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>
          Frontend Developer / Javascript Expert / Youtuber
        </h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman'></Loader>
    </>
  )
}

export default Home;


