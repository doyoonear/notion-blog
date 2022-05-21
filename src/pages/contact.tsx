import Header from '@/components/header'
import ExtLink from '@/components/ext-link'

import sharedStyles from '@/styles/shared.module.css'
import contactStyles from '@/styles/contact.module.css'

import GitHub from '@/components/svgs/github'
import Envelope from '@/components/svgs/envelope'
import LinkedIn from '@/components/svgs/linkedin'

const contacts = [
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/doyoonear',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/doyoonleee/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:doyoonleee@gmail.com?subject=Notion Blog',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/pear.png" alt="pear as avatar image" height={30} />
        </div>

        <h1 className={contactStyles.title}>Contact</h1>

        <h2 className={contactStyles.name}>Doyoon Lee</h2>
        <h2 className={contactStyles.name}>Frontend Engineer</h2>
        <div className={contactStyles.companyGroup}>
          <h3>
            <ExtLink href="https://day1company.co.kr/">@ Day1company</ExtLink>
          </h3>
          <h3>
            <ExtLink href="https://zero-base.co.kr/">@ zero-base</ExtLink>
          </h3>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
