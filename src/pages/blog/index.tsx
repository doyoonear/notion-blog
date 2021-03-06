import Link from 'next/link'
import { useRouter } from 'next/router'

import blogStyles from '@/styles/blog.module.css'
import { getBlogLink, getDateStr, postIsPublished } from '@/lib/blog-helpers'
import { textBlock } from '@/lib/notion/renderers'
import getNotionUsers from '@/lib/notion/getNotionUsers'
import getBlogIndex from '@/lib/notion/getBlogIndex'
import { PostType } from '@/types/common'

import Header from '@/components/header'
import PostWrapper from '@/components/blog/post-wrapper'
import Post from '@/components/blog/post'
import Grid from '@/components/blog/grid'
import Layout from '@/components/layout'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: PostType[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post: PostType) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Index = ({
  posts = [],
  preview,
}: {
  posts: PostType[]
  preview?: string
}) => {
  const router = useRouter()

  // const onClickPost = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, slug: string) => {
  //   console.log('onClickPost', slug)
  //   router.push(`/blog/${getBlogLink(slug)}`)
  // }

  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <Layout>
        {posts.length === 0 && <p>There are no posts yet</p>}
        <Grid>
          {posts.map(
            (post: PostType, index: number): JSX.Element => {
              return (
                <Link
                  key={post.Slug}
                  href={`${getBlogLink(post.Slug)}`}
                  passHref
                >
                  <PostWrapper gridType={index}>
                    <Post post={post} />
                  </PostWrapper>
                </Link>
              )
            }
          )}
        </Grid>
      </Layout>
    </>
  )
}

export default Index
