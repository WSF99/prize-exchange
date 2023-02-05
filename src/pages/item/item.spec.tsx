import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { Item } from './[id]'
jest.mock('next/router', () => require('next-router-mock'))

const mockItem = {
  id: 6,
  title: 'MacBook Pro',
  description:
    'MacBook Pro 2021 with mini-LED display may launch between September, November',
  price: 1749,
  discountPercentage: 11.02,
  rating: 4.57,
  stock: 83,
  brand: 'Apple',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  images: [
    'https://i.dummyjson.com/data/products/6/1.png',
    'https://i.dummyjson.com/data/products/6/2.jpg',
    'https://i.dummyjson.com/data/products/6/3.png',
    'https://i.dummyjson.com/data/products/6/4.jpg'
  ]
}

describe('Item', () => {
  it('renders item details when item is available', async () => {
    render(
      <Provider store={store}>
        <Item itemId="6" item={mockItem} />
      </Provider>
    )
    const item = screen.getByTestId('item')
    expect(item).toBeInTheDocument()

    expect(item).toHaveTextContent(`${mockItem.title}`)
    expect(item).toHaveTextContent(`${mockItem.description}`)
  })

  it('renders header component', async () => {
    render(
      <Provider store={store}>
        <Item itemId="6" item={mockItem} />
      </Provider>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
