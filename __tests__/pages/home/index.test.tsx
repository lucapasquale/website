import { render, screen } from '@testing-library/react'

import Home from '../../../src/pages/index'

describe('Home', () => {
  it('snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })

  it('renders the page', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
