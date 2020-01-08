import styled from '@emotion/styled'

import { ThemeProps } from '~/style/theme'

const HTMLContent = styled.div<ThemeProps>`
  ul,
  p {
    margin: 0 0 0.6em;
  }

  ul {
    padding: 0;
  }

  li {
    display: flex;
    margin: 0 0 0.3em;
    list-style-type: none;

    &::before {
      display: block;
      margin-right: 0.8em;
      color: ${({ theme }) => theme.screen.colors.bodyTextSecondary};
      content: '\\2022';

      @media print {
        color: ${({ theme }) => theme.print.colors.bodyTextSecondary};
      }
    }
  }

  a {
    color: inherit;
  }

  @media print {
    a {
      text-decoration: none;

      &::after {
        margin-left: 0.4em;
        content: '[' attr(href) ']';
      }
    }
  }
`

export default HTMLContent
