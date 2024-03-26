import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';

const skillList = [
  {icon: <FaHtml5 />, color: 'text-orange-400', name: 'HTML' },
  {icon: <FaCss3Alt />, color: 'text-[#2AA8E0]', name: 'CSS' },
  {icon: <IoLogoJavascript />, color: 'text-yellow-300', name: 'JavaScript' },
  {icon: <FaReact/>, color: 'text-accent-color-0', name: 'React JS' },
  {icon: <TbBrandNextjs/>, color: 'text-white', name: 'Next JS' },
  {icon: <FaDocker />, color: 'text-blue-400', name: 'Docker' },
  {icon: <FaNodeJs />, color: 'text-green-400', name: 'Node JS' },
  {icon: <SiTailwindcss />, color: 'text-blue-400', name: 'Tailwind CSS'}
]

export default function Skills() {
  return (
    <div className="snap-always snap-start w-full h-screen grid
        grid-rows-6 md:grid-rows-4 grid-cols-2 md:grid-cols-4
        gap-10 items-center p-5 bg-[#112620] text-white">
      <h2 className= "justify-self-center">
        <span className="border-b-4 text-white text-2xl md:text-4xl border-accent-color-0">Skills</span>
      </h2>
      {/* Empty div for layout */}
      <div className="col-start-2 md:col-start-2 md:col-end-5" />
      {
        skillList.map((skill) => {
          return (
            <div className={`text-7xl justify-self-center ${skill.color}`}>
              {skill.icon}
              <p className="mt-2 text-sm text-white text-center w-full">{skill.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}
