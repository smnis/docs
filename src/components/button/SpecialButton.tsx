import styled from 'styled-components'
import Button from './Button'
import { defaultTheme as theme } from '@prisma/lens/dist/web'

export const SpecialButton = styled(Button)`
  background: ${theme.colors.green[500]};
  color: ${theme.colors.white};
  &:hover {
    background: ${theme.colors.green[600]};
  }
`
