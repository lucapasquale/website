import React from 'react'

// Problem with how next/image is used in tests, meanwhile mocking everything
const mock = (props: { children: React.ReactElement }): React.ReactElement => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="test-img">{props.children}</img>
}

export default mock
