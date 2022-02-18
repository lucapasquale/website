import { render, screen, waitFor, within } from '@testing-library/react'

import Secrets from '../../../src/pages/secrets'

describe('Secrets', () => {
  it('snapshot', () => {
    const { container } = render(<Secrets />)

    expect(container).toMatchSnapshot()
  })

  it('renders the page', async () => {
    render(<Secrets />)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
