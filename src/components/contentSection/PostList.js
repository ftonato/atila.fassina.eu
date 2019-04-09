import React from 'react'

export default ({ posts }) => (
  <ul>
    {posts.map(({ node }) => (
      <li key={node.id}>{node.title}</li>
    ))}
  </ul>
)
