import { ShoppingCartIcon } from '@/components/ShoppingCartIcon'
import { useRouter } from 'next/router'
import { BsCoin } from 'react-icons/bs'
import { FaExchangeAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export const Header = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  const balance = useSelector((state) => state?.balance?.value)

  return (
    <div className="sticky top-0 z-50 bg-slate-600 flex items-center p-1 lg:p-4 justify-between ">
      <div className="flex ml-2 items-center">
        <FaExchangeAlt className="mr-1 text-green-400 rounded-sm" />
        <p
          className="text-white cursor-pointer md:text-xl"
          onClick={handleClick}
        >
          Prize Exchange
        </p>
      </div>
      <div className="flex items-center justify-end mr-2 lg:mr-4">
        <BsCoin className="text-yellow-500 text-xl" />
        <p className="text-white mr-1 lg:mr-2 ml-1 lg:text-xl">{balance}</p>
        <ShoppingCartIcon />
      </div>
    </div>
  )
}
