import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark';

type Props = {
  children?: any
  language?: Language
}

export const Code: FC<Props> = ({ children, language = 'typescript' }) => {
  console.log(language, children);

  // return <div>a</div>
  return (
    <Highlight {...defaultProps} theme={vsDark} code={children.props.children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
