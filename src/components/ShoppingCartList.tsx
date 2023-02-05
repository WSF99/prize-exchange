import { RootObject } from '@/pages/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ShoppingCartList() {
  const [items, setItems] = useState<RootObject>()

  useEffect(() => {
    handleGetItems()
  }, [])

  const handleGetItems = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      setItems(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-row flex-wrap p-2 justify-center items-center sm:justify-start">
      {items ? (
        <div className="flex flex-col w-screen ">
          {items.products.map((product) => (
            <div className="flex p-2 flex-row  mb-2  bg-slate-400 rounded-xl min-h-[120px] max-h-[120px] min-w-screen md:max-w-full max-w-[250px]">
              <div className="flex w-32 h-30 md:w-30 md:h-30">
                <Image src={`${product?.images[0]}`} width={200} height={200} />
              </div>

              <div className="flex flex-col justify-center items center ml-2">
                <p className="md:text-xl text-sm">{product?.brand}</p>
                <p className="md:text-xl text-sm">{product?.title}</p>
              </div>
              <div className="flex flex-row items-center ml-10 md:text-xl text-sm">
                1000
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Seu carrinho de compras está vazio.</div>
      )}
    </div>
  )
}
