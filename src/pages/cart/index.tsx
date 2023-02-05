import { ShoppingCart } from '@/components/ShoppingCart'
import { useState } from 'react'
import { Header } from '../../components/Header'

export const Cart = () => {
  const [cartItems, getCartItems] = useState()
  return (
    <div className="min-h-screen bg-slate-400">
      <title>Prize Exchange</title>
      <Header />
      <main className="flex flex-col">
        <div className=" bg-gray-300 p-10 m-6 rounded-md ">
          <ShoppingCart />
        </div>
      </main>
    </div>
  )
}

export default Cart
