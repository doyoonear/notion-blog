import Link from 'next/link'
import Header from '@/components/header'
import PostWrapper from '@/components/blog/post-wrapper'
import Post from '@/components/blog/post'
import Grid from '@/components/blog/grid'
import Layout from '@/components/layout'

import blogStyles from '@/styles/blog.module.css'
import { getBlogLink, getDateStr, postIsPublished } from '@/lib/blog-helpers'
import { textBlock } from '@/lib/notion/renderers'
import getNotionUsers from '@/lib/notion/getNotionUsers'
import getBlogIndex from '@/lib/notion/getBlogIndex'
import { PostType } from '@/types/common'

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
  const onClickPost = (post: PostType) => {
    ;`/blog/${getBlogLink(post.Slug)}`
  }

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
                <PostWrapper
                  key={`post-wrapper-${index}`}
                  gridType={index < 11 ? index : index - 10}
                  onClick={() => onClickPost(post)}
                >
                  <Post post={post} />
                </PostWrapper>
              )
            }
          )}
        </Grid>
      </Layout>
    </>
  )
}

export default Index
