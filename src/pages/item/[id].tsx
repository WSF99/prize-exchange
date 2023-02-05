import { GetStaticPaths } from 'next'
import { Header, ItemDetails } from '../../components'
import { Product } from '../../types'

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

export const getStaticProps = async ({ params }) => {
  const itemId = params?.id
  const response = await fetch(`https://dummyjson.com/products/${itemId}`)
  const data = await response.json()

  return { props: { itemId, item: data } }
}

export const Item = ({ itemId, item }: Props) => {
  return (
    <div className="min-h-screen bg-slate-400">
      <title>Prize Exchange</title>
      <Header />
      {item ? (
        <main data-testid="item" className="flex flex-col items-center">
          <div className=" bg-gray-300 p-10 m-6 rounded-md ">
            <ItemDetails item={item} />
          </div>
        </main>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  )
}

export default Item
