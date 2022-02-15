import styled from 'styled-components'

const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | JSX.Element[][]
}) => {
  return <StyledLayout>{children}</StyledLayout>
}

const StyledLayout = styled.div`
  padding: 3rem 5rem;
`

export default Layout
