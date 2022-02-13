import React, { useState } from 'react'

const PostVer1 = (value) => {
  const [post, setPost] = useState(value)
  console.log('value', value)

  return (
    post && (
      <div style={{ margin: '10px 0 20px' }}>
        <p>Count: {{ post }}</p>
      </div>
    )
  )
}

export default PostVer1
