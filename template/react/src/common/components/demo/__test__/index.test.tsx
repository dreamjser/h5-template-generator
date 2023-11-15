import { render, screen } from '@testing-library/react'
import Demo from '../index'
import '@testing-library/jest-dom'

test('demo component test sucess', () => {
  render(<Demo />)

  const element = screen.getByText(/this is a demo/i)

  expect(element).toBeInTheDocument()
})
