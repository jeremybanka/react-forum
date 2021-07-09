/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { func } from 'prop-types'
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
    <div
      css={css`
        max-width: 400px;
        height: 400px;
        border: 1px solid white;
        padding: 10px;
      `}
    >
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
