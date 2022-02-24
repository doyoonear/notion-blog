import styled from 'styled-components'

const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | JSX.Element[][]
}) => {
  return <StyledLayout>{children}</StyledLayout>
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  padding: 0 3rem;
`

export default Layout
