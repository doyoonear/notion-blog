import React from 'react'
import Link from 'next/link'

import Header from '../../components/header'
import PostWrapper from './post-wrapper'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <article key={post.Slug}>
        <h3>
          <span>
            {!post.Published && <span>Draft</span>}
            <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
              <a>{post.Page}</a>
            </Link>
          </span>
        </h3>
        {post.Authors?.length > 0 && <p>By: {post.Authors.join(' ')}</p>}
        {post.Date && <aside>Posted: {getDateStr(post.Date)}</aside>}
        <p>
          {(!post.preview || post.preview.length === 0) && ''}
          {(post.preview || []).map((block, idx) =>
            textBlock(block, true, `${post.Slug}${idx}`)
          )}
        </p>
      </article>
    </PostWrapper>
  )
}

export default Post
