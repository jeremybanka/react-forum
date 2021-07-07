import { func } from 'prop-types'
import React from 'react'
import { IPost } from "../types/IPost"

function Post({
  viewPost,
  user,
  title,
  postBody,
  timeStamp,
  postScore,
  id,
}) {
  return (
    <div>
      <h3>{title} - <em>{user}</em></h3>
      <p>{postBody}</p>
      <hr />
      <p>{postScore}</p>
      <p>{timeStamp.toString()}</p>
      <button onClick={() => viewPost(id)}>
        View Full Post
      </button>
    </div>
  )
}

Post.propTypes = {
  ...IPost,
  viewPost: func.isRequired,
}

export default Post
