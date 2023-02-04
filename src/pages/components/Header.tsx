import { BsCoin } from 'react-icons/bs'
import { FaExchangeAlt } from 'react-icons/fa'

const saldo = 2000 // hardcoded por enquanto
export function Header() {
  return (
    <div className="sticky top-0 z-50  bg-slate-600 flex items-center pd-2 lg:px-2 shadow-md justify-between p-2">
      <div className="flex ml-2 items-center">
        <FaExchangeAlt className="mr-1 text-green-400 rounded-sm" />
        <p className="text-white">Prize Exchange</p>
      </div>
      <div className="flex items-center space-x-1 justify-end mr-2 md:mr-4">
        <BsCoin className="text-yellow-500" />
        <p className="text-white">{saldo}</p>
      </div>
    </div>
  )
}
