import { fireEvent, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { ItemCard } from './index'

jest.mock('next/router', () => require('next-router-mock'))

describe('ItemCard', () => {
  const item = {
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

  it('renders a button with the text "COMPRAR"', () => {
    render(<ItemCard item={item} />)
    const button = screen.getByText('COMPRAR')
    expect(button).toBeInTheDocument()
  })

  it('renders the product information', () => {
    const { getByText } = render(<ItemCard item={item} />)
    expect(getByText(item.title)).toBeInTheDocument()
    expect(getByText(`${item.price}`)).toBeInTheDocument()
  })

  it('navigates to the correct URL when the buy button is clicked', () => {
    const { getByText } = render(<ItemCard item={item} />)
    const buyButton = getByText('COMPRAR')
    fireEvent.click(buyButton)
    expect(mockRouter).toMatchObject({
      asPath: `/item/${item.id}`,
      pathname: `/item/${item.id}`,
      asPath: '',
      pathname: '',
      query: {}
    })
  })

  it('renders the BsCoin and BsFillCartFill icons', () => {
    const { getByTestId } = render(<ItemCard item={item} />)
    expect(getByTestId('coin-icon')).toBeInTheDocument()
    expect(getByTestId('shopping-cart-icon')).toBeInTheDocument()
  })
})
