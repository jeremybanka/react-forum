/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { shape, objectOf, func } from 'prop-types'
import { IPost } from '../types/IPost'
import Post from './Post'

function Posts({ postsById, viewPost, viewNewPostForm }) {
  return (
    <div
      css={css`
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      `}
    >
      {Object.values(postsById).map(post =>
        <Post
          key={post.id}
          viewPost={viewPost}
          user={post.user}
          title={post.title}
          postBody={post.postBody}
          timeStamp={post.timeStamp}
          id={post.id}
          postScore={post.postScore}
        />
      )}
      <button onClick={() => viewNewPostForm()}>Add a Post</button>
    </div>
  )
}

Posts.propTypes = {
  postsById: objectOf(shape(IPost)).isRequired,
  viewPost: func.isRequired,
  viewNewPostForm: func.isRequired,
}

export default Posts
