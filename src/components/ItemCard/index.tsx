import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsCoin, BsFillCartFill } from 'react-icons/bs'
import { Button } from '../Button'

export const ItemCard = (props) => {
  const router = useRouter()

  const item: Product = props?.item
  return (
    <div className="flex flex-col ml-5 mb-5 items-center justify-between  bg-slate-50 rounded-md w-full sm:w-40 max-h-[260px] min-h-[260px] transition duration-200 transform ease-in hover:shadow-xl">
      <div className="mt-2">
        <Image
          src={item?.images[0]}
          width={100}
          height={100}
          alt={item.title}
        />
      </div>

      <p className="ml-2 text-base lg:text-lg self-center text-gray-600  font-semibold">
        {item?.title}
      </p>
      <div className="flex flex-row items-center justify-center">
        <BsCoin
          data-testid="coin-icon"
          className="text-yellow-500 mr-1 text-base lg:text-lg"
        />
        <p className="lg:text-xl text-base font-extrabold text-amber-600 ">
          {item?.price}
        </p>
      </div>

      <Link href="/item/[id]" as={`/item/${item.id}`}>
        <div data-testid="buy-button" className="mb-1">
          <Button
            leftComponent={
              <BsFillCartFill
                data-testid="shopping-cart-icon"
                className="text-white"
              />
            }
            text="COMPRAR"
            textColor="white"
            color="rgb(217, 119, 6)"
          />
        </div>
      </Link>
    </div>
  )
}
