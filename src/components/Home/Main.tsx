import { HiArrowDown } from 'react-icons/hi'

export default function Main() {
  return (
    <main className="flex justify-center items-center h-full mt-[-8rem]">
      <div className="max-w-[1080px] p-6">
        <p className="text-accent-color-0 py-1">Hi, my name is</p>
        <h1 className="font-bold text-4xl sm:text-7xl text-white">Sanjeet Kanwar</h1>
        <h2 className="font-bold text-4xl sm:text-7xl text-gray-400">I'm a Frontend Developer.</h2>
        <p className="text-gray-400 py-4">I'm a full stack web developer specialising in building web applications on React.</p>
      </div>

      <div className="absolute bottom-8 animate-bounce text-white">
        <button className="size-12 flex justify-center items-center rounded-full border-2 hover:bg-accent-color-0 shadow-md shadow-slate-300">
          <HiArrowDown className="size-6"/>
        </button>
      </div>
    </main>
  )
}
