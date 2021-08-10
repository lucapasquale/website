import React, { FC } from 'react'
import dracula from 'prism-react-renderer/themes/dracula'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'

export const Code: FC = (props: any) => {
  const language = props.className?.replace('language-', '')
  if (!language) {
    return (
      <code className="mx-1 px-1 sm:px-2 py-1 bg-gray-700 text-gray-200 rounded-lg" {...props} />
    )
  }

  return (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={props.children as string}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + ' overflow-scroll text-sm px-2 sm:px-4 py-2 rounded-md'}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} className="">
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
