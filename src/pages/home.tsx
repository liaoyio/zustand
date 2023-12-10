import { AntdesignIcon, ReactIcon, UnocssIcon } from '@com/icon/logo'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div flex="~ col" className="items-center h-full pt-40">
      <div flex="~" className="gap-4 pb-4">
        <ReactIcon className="w-9 h-9" />
        <UnocssIcon className="w-9 h-9" />
        <AntdesignIcon className="w-9 h-9" />
        <img src="/zustand.png" alt="zustand" className="w-9 h-9" />
      </div>
      <h1 className="font-semibold text-3xl">React + UnoCSS + Ant Design + zustand ✨</h1>

      <div className='py-10 c-[#3da8f5]' >
        <Link to="/zustand" className='border-b border-[#bedcff] hover:c-[#007fff]'>🐻 Zustand Tutorial</Link>
      </div>
    </div>
  )
}

export default Home
