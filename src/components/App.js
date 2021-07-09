/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import '../App.css'
import PostControl from './PostControl'

function App() {
  const favoriteColor = `#fd0`
  return (
    <div
      css={css`
        button {
          background: ${favoriteColor};
        }
      `}
    >
      <PostControl />
    </div>
  )
}

export default App
