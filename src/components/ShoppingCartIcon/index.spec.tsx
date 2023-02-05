import { fireEvent, render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { ShoppingCartIcon } from './index'

jest.mock('next/router', () => require('next-router-mock'))

describe('ShoppingCartIcon', () => {
  it('renders the shopping cart icon', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ShoppingCartIcon />
      </Provider>
    )

    expect(getByTestId('shopping-cart-icon')).toBeInTheDocument()
  })

  it('navigates to the cart page when the icon is clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ShoppingCartIcon />
      </Provider>
    )

    fireEvent.click(getByTestId('shopping-cart-icon'))
    expect(mockRouter).toMatchObject({
      asPath: '/cart',
      pathname: '/cart',

      query: {}
    })
  })
})
