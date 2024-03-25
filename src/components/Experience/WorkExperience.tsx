import ReadMore from './ReadMore'

const experiences = [
  {
    date: 'APR 2019 - FEB 2024',
    role: 'Software Engineer',
    company: '3P Learning Ltd',
    responsibilities: 'At 3P Learning, we specialize in developing web applications that leverage play to facilitate children\'s learning. My' +
    'role involves designing and developing web applications that cater to students, teachers, and parents, enabling them to interact seamlessly with our educational products.' +
    '<br/>• Collaborated with cross-functional teams in designing, developing, and maintaining over 6 projects' +
    '<br/>• Contributed to project planning, code reviews, and continuous improvement initiatives, resulting in successful delivery and enhanced user experiences.'
  },
  {
    date: 'MAR 2017 - MAR 2019',
    role: 'Junior Web Developer',
    company: '3P Learning Ltd',
    responsibilities: '• Debugging and maintenance of applications under the Mathletics product.' +
    '<br/> • Worked on designing and developing internal projects for content creation.' +
    '<br/> • Collaborated with team members to implement new features, and enhance user experience and performance of Mathletics products.'
  },
  {
    date: 'DEC 2016 - MAR 2017',
    role: 'Web Developer',
    company: 'Crossover Web',
    responsibilities: '• Built and maintained CMS using WordPress.' +
    '<br/>• Integrated various plugins in accordance with customer’s needs.' +
    '<br/>• Integrated various third-party APIs.'
  },
  {
    date: 'FEB 2015 - MAR 2017',
    role: 'Freelance Web Developer',
    company: 'sanjeet.com.au - PT',
    responsibilities: '• Built and maintained various WordPress websites.' +
    '<br/>• Integrated various plugins in accordance with customer’s needs.' +
    '<br/>• Performed cross-browser and cross-platform testing.'
  }
]

export default function WorkExperience() {
  return (
    experiences.map((each, index) => {
      const even = (index+1) % 2 === 0
      const { date, role, company, responsibilities } = each
      return(
        <div className={`md:w-[50%] relative px-10 pt-5 pb-10
        after:content-[''] after:absolute after:w-5 after:h-5 
        after:bg-white after:top-[18px] after:rounded-full after:z-10 after:border-4 after:border-accent-color-0
        ${even ? 'left-0 after:left-[-9px] md:after:left-[unset] md:after:right-[-12px]' : 'md:left-[50%] after:left-[-9px]'}`}>
          <div
            className={'bg-gray-200 p-4 rounded-md'}
            key={date}
          >
            <div className="text-left text-accent-color-0">{date}</div>
            <h2 className="font-bold py-3 text-2xl text-black tracking-wide">{role} | {company}</h2>
            <ReadMore>
              <p
                className="text-gray-700 tracking-wide text-left"
                dangerouslySetInnerHTML={{
                  __html: responsibilities
                }}
              />
            </ReadMore>
          </div>
        </div>
      )
    })
  )
}
