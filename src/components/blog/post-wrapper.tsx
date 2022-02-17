import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { sizes, colors } from '@/styles'

const getGridType = (gridType: number) => {
  switch (gridType) {
    case 1:
      return css`
        min-height: 10rem;
        grid-column: 2 / 5;
        grid-row: 1 / 5;
      `

    case 2:
      return css`
        min-height: 10rem;
        grid-column: 1 / 3;
        grid-row: 5 / 8;
      `

    case 3:
      return css`
        min-height: 10rem;
        grid-column: 3 / 6;
        grid-row: 6 / 10;
      `

    case 4:
      return css`
        min-height: 10rem;
        grid-column: 1 / 6;
        grid-row: 11 / 16;
      `

    case 5:
      return css`
        min-height: 10rem;
        grid-column: 4 / 7;
        grid-row: 16 / 20;
      `

    case 6:
      return css`
        min-height: 10rem;
        grid-column: 3 / 6;
        grid-row: 20 / 24;
      `

    case 7:
      return css`
        min-height: 10rem;
        grid-column: 1 / 3;
        grid-row: 21 / 28;
      `

    case 8:
      return css`
        min-height: 10rem;
        grid-column: 4 / 6;
        grid-row: 25 / 30;
      `

    case 9:
      return css`
        min-height: 10rem;
        grid-column: 2 / 5;
        grid-row: 30 / 33;
      `

    case 10:
      return css`
        min-height: 10rem;
        grid-column: 4 / 7;
        grid-row: 34 / 38;
      `

    default:
      return css`
        min-height: 10rem;
        grid-column: 2 / 5;
        grid-row: 1 / 5;
      `
  }
}

const PostWrapper = ({
  children,
  gridType,
}: {
  children: JSX.Element
  gridType: number
}): JSX.Element => {
  return (
    <StyledPostWrapper sizes={sizes} colors={colors} gridType={gridType}>
      {children}
    </StyledPostWrapper>
  )
}

const StyledPostWrapper = styled.div`
  background-color: ${(props) => props.colors.primary};
  padding: 1rem;
  border: 0.01rem solid black;
  color: ${(props) => props.colors.black};
  ${(props) => getGridType(props.gridType)};
`

export default PostWrapper
