import { render } from '@testing-library/vue'
import Demo from '../index'
import '@testing-library/jest-dom'

test('demo component test sucess', () => {
  const { getByText } = render(Demo)

  const element = getByText(/这是demo/i)

  expect(element).toBeInTheDocument()
})
