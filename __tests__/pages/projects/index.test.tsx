import { render, screen, within } from '@testing-library/react'

import Projects from '../../../src/pages/projects'

describe('Projects', () => {
  it('snapshot', () => {
    const { container } = render(<Projects />)

    expect(container).toMatchSnapshot()
  })

  it('renders the page', async () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    const projects = await screen.findAllByRole('article')

    projects.forEach((project) => {
      expect(within(project).getByRole('img')).toBeInTheDocument()
      expect(within(project).getByRole('heading', { level: 3 })).toBeInTheDocument()
    })
  })
})
