import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
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
    <header className={styles.header}>
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
      <div className={styles.navBar}>
        <Link href="/">
          <span className={styles.homeLogo}>🚪</span>
        </Link>
        <ul className={styles.navigation}>
          {navItems.map(
            ({ label, page, link }) =>
              page && (
                <li
                  key={page}
                  className={pathname === page ? 'active' : undefined}
                >
                  <Link href={page}>
                    <a>{label}</a>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
