import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Deploy your own!</span>
        <ExtLink href="https://vercel.com/new/git/external?repository-url=https://github.com/ijjk/notion-blog/tree/main&project-name=notion-blog&repository-name=notion-blog">
          <img
            src="https://vercel.com/button"
            height={23}
            width={60}
            alt="deploy to Vercel button"
          />
        </ExtLink>
      </footer>
    </>
  )
}
