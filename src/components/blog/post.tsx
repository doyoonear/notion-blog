import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Header from '@/components/header'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '@/lib/notion/renderers'

import { sizes, colors } from '@/styles'
import { PostType } from '@/types/common'

const Post = ({ post }: { post: PostType }): JSX.Element => {
  return (
    <article key={post.Slug}>
      <h3>
        <span>
          {!post.Published && <span>Draft</span>}
          <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
            <a>
              <PostTitle sizes={sizes}>{post.Page}</PostTitle>
            </a>
          </Link>
        </span>
      </h3>
      {post.Authors?.length > 0 && post.Date && (
        <PostDesc sizes={sizes}>
          By: {post.Authors.join(' ')}
          <br />
          Posted: {getDateStr(post.Date)}
        </PostDesc>
      )}
      {/* 
        XXX: post.preview 가 나오지 않아서 대체.. 무슨 타입인지
        <p>
          {(!post.preview || post.preview.length === 0) && ''}
          {(post.preview)?.map((block, idx) =>
            textBlock({ block, true, mainKey: `${post.Slug}${idx}`})
          )}
        </p> */}
    </article>
  )
}

const PostTitle = styled.h2`
  font-size: ${(props) => props.sizes.font20};
`

const PostDesc = styled.p`
  font-size: ${(props) => props.sizes.font12};
  font-family: 'Helvetica';
`

export default Post
