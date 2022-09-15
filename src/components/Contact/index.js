import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();
  let heading = 'Contact Me'

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_y76vsoi', 'template_wvz4x7o', refForm.current, 'Lp6KvQnb_--mdKB2j'
    )
      .then(function (response) {
        alert('SUCCESS!');
        console.log('SUCCESS!', response.status, response.text);
        window.location.reload(false)
      }, function (error) {
        console.log('FAILED...', error);
        alert('FAILED...');
      });
  }

  var position = [24.8607, 67.0011]
  return (
    <>
      <div className='container contact-page'>

        <div className='text-zone'>
          <h1>
            <AnimatedLetters strArray={heading.split('')} idx={15} lettersClass={letterClass} />
          </h1>
          <p>I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api.
            I can integrate 3rd party applications in your wix website using rest APIs.
            I can create custom functionality using wix-collections & velo code.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type="email" name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type="text" name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required></textarea>
                </li>
                <li>
                  <input type="submit" value="Submit" className='flat-button' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Monis Khan <br /> Karachi <br /> Pakistan <span>monis8khan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"> </TileLayer>
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact