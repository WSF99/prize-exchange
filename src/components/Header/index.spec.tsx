import { fireEvent, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { Header } from './index'

jest.mock('next/router', () => require('next-router-mock'))

describe('Header', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
  })

  it('should display Prize Exchange', () => {
    expect(screen.getByText('Prize Exchange')).toBeInTheDocument()
  })

  it('should display balance', () => {
    expect(screen.getByText('2000')).toBeInTheDocument()
  })

  it('should display shopping cart icon', () => {
    expect(screen.getByTestId('shopping-cart-icon')).toBeInTheDocument()
  })

  it('should display exchange icon', () => {
    expect(screen.getByTestId('exchange-icon')).toBeInTheDocument()
  })

  it('should display coin icon', () => {
    expect(screen.getByTestId('coin-icon')).toBeInTheDocument()
  })

  it('should navigate to home page when clicking on Prize Exchange', () => {
    fireEvent.click(screen.getByText('Prize Exchange'))

    expect(mockRouter).toMatchObject({
      asPath: '/',
      pathname: '/',
      query: {}
    })
  })

  it('should navigate to basket when clicking on Cart Icon', () => {
    fireEvent.click(screen.getByTestId('shopping-cart-icon'))

    expect(mockRouter).toMatchObject({
      asPath: '/cart',
      pathname: '/cart',
      query: {}
    })
  })
})
