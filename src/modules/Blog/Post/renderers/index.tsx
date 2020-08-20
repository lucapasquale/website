import { Blockquote } from './Blockquote'
import { Code } from './Code'
import { InlineCode } from './InlineCode'
import { Link } from './Link'
import { Heading } from './Heading'
import { ThematicBreak } from './ThematicBreak'

export const renderers = {
  blockquote: Blockquote,
  code: Code,
  heading: Heading,
  inlineCode: InlineCode,
  link: Link,
  thematicBreak: ThematicBreak,
}
