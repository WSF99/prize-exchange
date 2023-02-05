import { ItemCard } from '@/components/ItemCard'
import { RootObject } from '@/types'
import { useEffect, useState } from 'react'
export const Items = () => {
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
    <div className="flex">
      {items ? (
        <div className="flex flex-row flex-wrap justify-center sm:justify-start p-2">
          {items.products.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  )
}
