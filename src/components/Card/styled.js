import styled, { css } from "styled-components"

export const CardWrapper = styled.div`
  background: ${props => (props.background ? props.background : "blue")};

  h5 {
    color: #9963BA;
  }
  p {
    color: #e6e6e6;
  }
  ${props =>
    props.primary &&
    css`
      background: #8a4baf;

      h5 {
        color: #f1defe;
      }

      p {
        color: #f1defa;
      }
    `}
`
