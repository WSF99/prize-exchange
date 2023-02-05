import { Product } from '@/pages/types'
import { ItemDetails } from './ItemDetails'

export function PurchaseCard(props) {
  const item: Product = props?.item
  return <ItemDetails item={item} />
}
