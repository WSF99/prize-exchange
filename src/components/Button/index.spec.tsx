import { fireEvent, render } from '@testing-library/react'
import { Button } from './index'

describe('Button component', () => {
  it('renders text correctly', () => {
    const { getByText } = render(<Button text="Click me" />)
    const buttonText = getByText('Click me')
    expect(buttonText).toBeInTheDocument()
  })

  it('calls onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button text="Click me" onClick={onClick} />)
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('renders with the correct background', () => {
    const { container } = render(
      <Button text="Click me" color="#ff0000" textColor="#ffffff" />
    )
    const button = container.firstChild
    expect(button).toHaveStyle('background-color: #ff0000')
  })
})
