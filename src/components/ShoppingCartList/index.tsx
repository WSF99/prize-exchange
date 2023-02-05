import { RootObject } from '@/pages/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ShoppingCartList = () => {
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
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 hidden md:table-cell">Image</th>
          <th className="px-4 py-2 hidden md:table-cell">Marca</th>
          <th className="px-4 py-2">Produto</th>
          <th className="px-4 py-2">Preço</th>
        </tr>
      </thead>
      <tbody>
        {items ? (
          items.products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2 hidden md:table-cell">
                <Image src={`${product?.images[0]}`} width={100} height={100} />
              </td>
              <td className="border px-4 py-2 hidden md:table-cell">
                {product?.brand}
              </td>
              <td className="border px-4 py-2">{product?.title}</td>
              <td className="border px-4 py-2">1000</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="border px-4 py-2">
              Your shopping cart is empty.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
