import 'styled-components'
import { Theme } from './helpers/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
