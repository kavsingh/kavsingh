import styled from '@emotion/styled'

const HTMLContent = styled.div`
  ul,
  p {
    margin: 0 0 0.6em;
  }

  ul {
    padding: 0;
  }

  li {
    display: flex;
    margin: 0 0 0.2em;
    list-style-type: none;

    &::before {
      display: block;
      margin-right: 0.8em;
      content: '\\2013';
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