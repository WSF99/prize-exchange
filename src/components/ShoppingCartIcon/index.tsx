import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export const ShoppingCartIcon = (props) => {
  const router = useRouter()
  const itemsQuantity = useSelector((state) => state.basket.basket.length)

  const handleClick = () => {
    router.push('/cart')
  }

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <AiOutlineShoppingCart className="text-white md:text-2xl" />
      {itemsQuantity > 0 && (
        <div className="absolute bg-yellow-500 lg:left-[15px] md:left-4 md:bottom-4 lg:bottom-4 rounded-full w-3 h-3 bottom-2 left-[9px] lg:w-4 lg:h-4 flex items-center justify-center">
          <p className="text-center text-[10px] lg:text-[15px] p-1 text-slate-600">
            {itemsQuantity}
          </p>
        </div>
      )}
    </div>
  )
}
