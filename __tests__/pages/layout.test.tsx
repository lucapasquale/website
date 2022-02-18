import { render, screen, within } from '@testing-library/react'

import { Layout } from '../../src/common/components/Layout'

describe('Layout', () => {
  it('renders the header', () => {
    render(<Layout />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()

    expect(within(header).getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(within(header).getByText(/blog/i)).toBeInTheDocument()
    expect(within(header).getByText(/projects/i)).toBeInTheDocument()
  })

  it('renders the main content as children', () => {
    render(
      <Layout>
        <div data-testid="test-div" />
      </Layout>
    )

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(within(main).getByTestId('test-div')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Layout />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    expect(within(footer).getByText(/github/i)).toBeInTheDocument()
    expect(within(footer).getByText(/linkedin/i)).toBeInTheDocument()
    expect(within(footer).getByText(/instagram/i)).toBeInTheDocument()
  })
})
