import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/logo-s.png'
import logoSubtitle from '../../assets/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoS} alt='logo' />
                <img className="sub-logo" src={logoSubtitle} alt='slobodan' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' href='https://google.com' rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://google.com' rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://google.com' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://google.com' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;