import { Product } from '@/types'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export const ShoppingCartList = () => {
  const items: Product[] = useSelector((state) => state?.basket?.basket || [])

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
              <td className="border px-4 py-2">{product?.title}</td>
              <td className="border px-4 py-2">{product?.price}</td>
              <td className="border px-4 py-2">ss</td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={5}
              className="border px-4 py-2 text-lg text-red-600  text-center"
            >
              Seu carrinho de compras está vazio :(
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
