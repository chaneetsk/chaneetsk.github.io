import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import Logo from '/assets/logo.png';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full h-[80px] flex justify-between items-center px-4 text-white">
      <div>
        <img className="size-12" src={Logo} alt="Logo" />
      </div>

      {/* Hamburger */}
      <button className="z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        { isMenuOpen ? <FaTimes /> : <FaBars /> }
      </button>

      {/* Menu */}
      {/* todo: get data from fetch */}
      {isMenuOpen && 
        <nav className="z-10 fixed left-0 top-0 h-screen w-full bg-neutral-700 flex flex-col justify-center gap-10 text-center">
          <ul>
            <li className="py-6 text-4xl cursor-pointer hover:text-accent-color-0" role="button">About</li>
            <li className="py-6 text-4xl cursor-pointer hover:text-accent-color-0" role="button">Skills</li>
            <li className="py-6 text-4xl cursor-pointer hover:text-accent-color-0" role="button">Experience</li>
            <li className="py-6 text-4xl cursor-pointer hover:text-accent-color-0" role="button">Contact</li>
          </ul>
          {/* <hr className='self-center w-40 border-t-4 border-y-white'/> */}
          <div className="self-center flex gap-5">
            <button onClick={() => window.open('https://www.linkedin.com/in/sanjeetkanwar/')}><FaLinkedin className="size-8 text-accent-color-0 hover:text-white"/></button>
            <button onClick={() => window.open('mailto:hey@sanjeet.com.au')}><FaEnvelope className="size-8 text-accent-color-0 hover:text-white"/></button>
          </div>
        </nav>
      }
    </header>
  )
}
