import WorkExperience from './WorkExperience'
export default function Experience() {
  return (
    <div className="snap-normal snap-start w-full min-h-screen bg-[#112620]">
      <main className="text-white px-5 md:p-10">
        <h2 className="pt-10 pb-20 text-center">
          <span className="border-b-4 text-white text-2xl md:text-4xl border-accent-color-0">Experience</span>
        </h2>
        <div className="flex flex-col max-w-[1200px] my-0 mx-auto relative
          before:content-[''] before:absolute before:w-1 before:bg-white before:top-0 before:bottom-0 md:before:left-[50%]">
          <WorkExperience />
        </div>
      </main>
    </div>
  )
}
