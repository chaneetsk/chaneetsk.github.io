import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="snap-always snap-start w-full h-screen bg-[#112620] p-28">
      <h2 className="pb-10 text-center">
        <span className="border-b-4 text-white text-2xl md:text-4xl border-accent-color-0">Contact</span>
      </h2>
      <div className="flex justify-center gap-5">
        <button onClick={() => window.open('https://www.linkedin.com/in/sanjeetkanwar/')}><FaLinkedin className="size-8 hover:text-accent-color-0 text-white"/></button>
        <button onClick={() => window.open('mailto:hey@sanjeet.com.au')}><FaEnvelope className="size-8 hover:text-accent-color-0 text-white"/></button>
      </div>
    </div>
  )
}
