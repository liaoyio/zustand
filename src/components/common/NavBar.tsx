import { ReactIcon } from "../icon/logo"

const NavBar = () => {
  return (
    <nav className="sticky top-0 grid h-16 grid-cols-2 items-center justify-center  px-8 py-4 border-b border-[#F2F2F2]">
      <div className=" text-2xl text-gray-700">
        <a href="/" className="flex justify-start items-center gap-2">
          <ReactIcon />
          React 18</a>
      </div>
      <div className="flex justify-end gap-x-4 text-gray-500 font-300">
        <a href="/example" hover="text-gray-700 transition-colors">Example</a>
        <a className="ml-2 flex items-center gap-x-1"
          hover="text-gray-700 transition-colors"
          href="https://github.com/bysxx/next-ts-template-tailwind " target="_blank" rel="noreferrer">
          <i className="i-mdi:github text-22px"></i>
          <span>Source Code</span>
        </a>
      </div>
    </nav>
  )
}

export default NavBar
