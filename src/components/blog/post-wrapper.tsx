import React, { useState } from 'react'
import styled from 'styled-components'

import { sizes, colors } from '../../../styles'

const PostWrapper = ({ children }) => {
  return (
    <StyledPostWrapper sizes={sizes} colors={colors}>
      {children}
    </StyledPostWrapper>
  )
}

const StyledPostWrapper = styled.div`
  background-color: ${(props) => props.colors.primary};
  border: 0.01rem solid black;
  color: ${(props) => props.colors.black};
`

export default PostWrapper
