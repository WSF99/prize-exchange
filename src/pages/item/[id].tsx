import { Header } from '@/components/Header'
import { PurchaseCard } from '@/components/PurchaseCard'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from '../types'

interface Props {
  itemId: string
  item: Product
}

export const getStaticPaths: GetStaticPaths = async () => {
  const itemIds = [...Array(30).keys()].map((i) => (i + 1).toString())

  const paths = itemIds.map((itemId) => ({
    params: { id: itemId }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const itemId = params?.id

  const response = await fetch(`https://dummyjson.com/products/${itemId}`)
  const data = await response.json()

  return { props: { itemId, item: data } }
}

export default function Item({ itemId, item }: Props) {
  return (
    <div className="min-h-screen bg-slate-400">
      <title>Prize Exchange</title>
      <Header />
      {item ? (
        <main className="flex flex-col items-center">
          <div className=" bg-gray-300 p-10 m-6 rounded-md ">
            <PurchaseCard item={item} />
          </div>
        </main>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  )
}
