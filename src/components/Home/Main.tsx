import { HiArrowDown } from 'react-icons/hi'

export default function Main() {
  return (
    <main className="flex justify-center items-center h-dvh mt-[-8rem]">
      <div className="max-w-[1080px] p-6">
        <p className="text-accent-color-0 py-1">Hi, my name is</p>
        <h1 className="font-bold text-4xl sm:text-7xl text-white">Sanjeet Kanwar</h1>
        <h2 className="font-bold text-4xl sm:text-7xl text-gray-400">I'm a Frontend Developer</h2>
        <p className="text-gray-400 py-4">Highly driven and performance focused with over 10 years of hands-on experience designing and developing responsive web applications.</p>
      </div>

      <div className="absolute bottom-3 animate-bounce text-white">
        {/* <div className="size-12 flex justify-center items-center rounded-full border-2 shadow-sm shadow-slate-300"> */}
        <HiArrowDown className="size-6"/>
        {/* </div> */}
      </div>
    </main>
  )
}
