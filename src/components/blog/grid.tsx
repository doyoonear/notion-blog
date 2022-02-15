import styled from 'styled-components'

const Grid = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  return <StyledGrid>{children}</StyledGrid>
}

const StyledGrid = styled.section`
  display: grid;
  width: 100%;
  grid-gap: 0.6rem;
  grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
  grid-template-rows: repeat(40, 3rem);
`

export default Grid
