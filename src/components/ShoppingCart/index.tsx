import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { removeItem } from '../../actions'
import { decrementByAmount } from '../../slicers/balanceSlicer'
import { store } from '../../store'
import { Product } from '../../types'
import { Button } from '../Button'
import { ShoppingCartList } from '../ShoppingCartList'

export const ShoppingCart = () => {
  const items: Product[] = useSelector((state) => state?.basket?.basket || [])

  const calculateTotal = (): number => {
    return items
      .map((product) => product.price * product.quantity)
      .reduce((sum, price) => sum + price, 0)
  }

  const buyProducts = () => {
    const balance = store?.getState().balance.value
    const totalPrice = items?.length > 0 && calculateTotal()
    if (!totalPrice) {
      alert('Você não selecionou nenhum item.')
      return
    }
    if (balance < calculateTotal() && totalPrice > 0) {
      alert('Seu saldo é insuficiente')
      return
    } else {
      store.dispatch(decrementByAmount(totalPrice))
      items?.map((item) => store.dispatch(removeItem(item)))
      alert('Compra efetuada com sucesso!')
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-gray-600 md:text-3xl">Meu carrinho</h1>
      <ShoppingCartList />
      <div className="flex flex-col items-center justify-center">
        <p className="mb-2 text-amber-600 md:text-xl">
          Preço Total: {calculateTotal()}
        </p>
        <Button
          text="FECHAR PEDIDO"
          textColor="white"
          color="green"
          height={70}
          width={200}
          leftComponent={<BsFillCartFill className="text-white" />}
          onClick={async () => buyProducts()}
        />
      </div>
    </div>
  )
}
