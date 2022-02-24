import React, { useState, forwardRef, PropsWithChildren } from 'react'
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
        grid-column: 1 / 4;
        grid-row: 9 / 14;
      `

    case 5:
      return css`
        min-height: 10rem;
        grid-column: 5 / 7;
        grid-row: 13 / 18;
      `

    case 6:
      return css`
        min-height: 10rem;
        grid-column: 3 / 6;
        grid-row: 17 / 23;
      `

    case 7:
      return css`
        min-height: 10rem;
        grid-column: 1 / 3;
        grid-row: 22 / 28;
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
        grid-column: 2 / 4;
        grid-row: 30 / 35;
      `

    case 10:
      return css`
        min-height: 10rem;
        grid-column: 4 / 7;
        grid-row: 34 / 40;
      `

    default:
      return css`
        min-height: 10rem;
        grid-column: 2 / 5;
        grid-row: 1 / 5;
      `
  }
}

interface WrapperPropType {
  children: JSX.Element
  gridType: number
}

const PostWrapper = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<WrapperPropType>
>(function (props: WrapperPropType, ref): JSX.Element {
  const { children } = props

  return (
    <StyledPostWrapper ref={ref} {...props} colors={colors}>
      {children}
    </StyledPostWrapper>
  )
})

const StyledPostWrapper = styled.a`
  background-color: ${(props) => props.colors.primary};
  padding: 1rem;
  border: 0.01rem solid black;
  color: ${(props) => props.colors.black};
  ${(props) => getGridType(props.gridType)};
`

export default PostWrapper
