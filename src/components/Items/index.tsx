import { useEffect, useState } from 'react'
import { ItemCard } from '../../components/index'
import { RootObject } from '../../types'

export const Items = () => {
  const [items, setItems] = useState<RootObject>()
  const fetch = require('node-fetch')
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
