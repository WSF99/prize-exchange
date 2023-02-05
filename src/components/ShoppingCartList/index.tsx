import { addItem, removeItem } from '@/actions'
import { store } from '@/store'
import { Product } from '@/types'
import Image from 'next/image'
import { BsDash, BsPlus, BsTrash } from 'react-icons/bs'
import { useSelector } from 'react-redux'

export const ShoppingCartList = () => {
  const items: Product[] = useSelector((state) => state?.basket?.basket || [])

  const removeFromBasket = (item: Product) => {
    store?.dispatch(removeItem(item))
  }

  const addProduct = (item: Product) => {
    store?.dispatch(addItem(item))
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 hidden md:table-cell">Image</th>
          <th className="px-4 py-2 hidden md:table-cell">Marca</th>
          <th className="px-4 py-2">Produto</th>
          <th className="px-4 py-2">Preço</th>
          <th className="px-4 py-2">Qtd</th>
        </tr>
      </thead>
      <tbody>
        {items?.length > 0 ? (
          items?.map((product, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2 hidden md:table-cell">
                <Image
                  src={`${product?.images[0]}`}
                  width={100}
                  height={100}
                  alt={`${product?.title}`}
                />
              </td>
              <td className="border px-4 py-2 hidden md:table-cell">
                {product?.brand}
              </td>
              <td className="border px-4 py-2 text-sm md:text-lg">
                {product?.title}
              </td>
              <td className="border px-4 py-2 text-sm md:text-xl text-amber-600">
                {product?.price}
              </td>

              <td className="border px-4 py-2  flex h-[160px] justify-center items-center">
                <BsDash className="md:text-xl text-sm mr-1 cursor-pointer" />
                {product?.quantity}
                <BsPlus
                  className="text-xl cursor-pointer ml-1"
                  onClick={() => addProduct(product)}
                />

                <BsTrash
                  className="text-sm md:text-xl text-red-600 md:ml-3 cursor-pointer"
                  onClick={() => removeFromBasket(product)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={5}
              className="border px-4 py-2 md:text-lg text-red-600  text-center"
            >
              Seu carrinho de compras está vazio :(
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
