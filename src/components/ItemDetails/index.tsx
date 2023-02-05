import { Product } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsCoin, BsFillCartFill } from 'react-icons/bs'
import { addItem } from '../../actions'
import { store } from '../../store'
import { Button } from '../Button'

export const ItemDetails = (props) => {
  const item: Product = props?.item
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const router = useRouter()

  const handleClick = async (item: Product) => {
    await store.dispatch(addItem(item))
    router.push('/cart')
  }

  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-row mb-2">
        <p className="text-gray-600 lg:text-2xl">
          {item?.brand} | {item?.title}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-row md:flex-col justify-center items-center md:mr-2 mb-2 md:mb-0">
          {item?.images.map((image, index) => (
            <div
              className="ml-1 md:ml-0"
              key={index}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                src={image}
                width={40}
                height={40}
                alt={item?.title}
                className="w-10 h-10 border rounded-full mr-5 mt-5"
                style={{
                  borderColor: `${
                    index === selectedImageIndex ? 'green' : 'white'
                  }`
                }}
              />
            </div>
          ))}
        </div>
        <div className="ml-0 md:ml-10">
          <Image
            src={item?.images[selectedImageIndex]}
            width={200}
            height={100}
            alt={item?.title}
            className="max-w-sm"
          />
        </div>

        <div className="mt-5 md:mt-0 ml-0 md:ml-10 items-center justify-center flex flex-col">
          <div className="flex flex-row justify-center items-center mb-2">
            <BsCoin className="text-yellow-500 mr-1 text-sm lg:text-2xl" />
            <p className="lg:text-2xl font-extrabold text-amber-600">
              {item?.price}
            </p>
          </div>
          <Button
            leftComponent={<BsFillCartFill className="text-white" />}
            text="COMPRAR"
            textColor="white"
            color="rgb(217, 119, 6)"
            height={60}
            width={200}
            onClick={async () => handleClick(item)}
          />
        </div>
      </div>
      <div className=" mt-5 max-w-xl lg:text-2xl">
        <p>{item?.description}</p>
      </div>
    </div>
  )
}
