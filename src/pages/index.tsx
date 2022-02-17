import Header from '@/components/header'
import ExtLink from '@/components/ext-link'
import Features from '@/components/features'
import sharedStyles from '@/styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Pear Enough</h1>
        <h4>
          Frontend Engineer
          <br /> Doyoon's portfolio website
          <br /> using Notion API for the blog
        </h4>
      </div>
    </>
  )
}
