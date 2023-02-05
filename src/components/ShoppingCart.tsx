import { BsFillCartFill } from 'react-icons/bs'
import { Button } from './Button'
import { ShoppingCartList } from './ShoppingCartList'

export function ShoppingCart() {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-gray-600 md:text-3xl">Meu carrinho</h1>
      <ShoppingCartList />
      <div className="flex flex-col items-center justify-center">
        <p className="mb-2 text-amber-600 md:text-xl">Preço Total: 2000</p>
        <Button
          text="FECHAR PEDIDO"
          textColor="white"
          color="green"
          height={70}
          width={200}
          leftComponent={<BsFillCartFill className="text-white" />}
        />
      </div>
    </div>
  )
}
