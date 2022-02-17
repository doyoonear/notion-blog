import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import styles from '@/styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Drawings', page: '/drawings' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <StyledHeader>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Pear Enough</title>
        <meta
          name="description"
          content="Frontend Engineer Doyoon's portfolio website using Notion API for the blog"
        />
        <meta name="og:title" content="Pear Enough - Doyoon Lee" />
        <meta property="og:image" content={ogImageUrl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <HomeButton>
          <Link href="/">🚪</Link>
        </HomeButton>

        <Navigation>
          {navItems.map(
            ({ label, page, link }) =>
              page && (
                <NavItem
                  key={page}
                  className={pathname === page ? 'active' : undefined}
                >
                  <Link href={page}>
                    <a>{label}</a>
                  </Link>
                </NavItem>
              )
          )}
        </Navigation>
      </NavBar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: block;
  text-align: center;
  color: white;
  font-size: 0.93rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
`

const NavBar = styled.div`
  display: flex;
  position: fixed;
  top: 1rem;
  width: 100%;
`

const HomeButton = styled.button`
  font-size: 2rem;
  width: 6rem;
  background-color: none;
`

const Navigation = styled.ul`
  width: calc(100% - 2rem);
  list-style: none;
  padding: 0;
`

const NavItem = styled.li`
  display: inline-block;
  padding: 0 3rem;
  background-color: var(--black);
  font-weight: 500;
  transform: translateY(-0.1rem);
  margin-left: 3rem;

  .active {
    background-color: var(--primary);
  }
`

export default Header
