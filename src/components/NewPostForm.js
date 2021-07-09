import React from 'react'
import PropTypes from 'prop-types'

function NewPostForm({ addPost, viewAllPosts }) {
  function handleNewPostFormSubmission(e) {
    e.preventDefault()
    const { user, title, postBody } = e.target

    addPost({
      user: user.value,
      title: title.value,
      postBody: postBody.value,
    })
  }

  NewPostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
  }

  return (
    <>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          name='user'
          placeholder='User Name'
        />
        <input
          type='text'
          name='title'
          placeholder='Title of Post'
        />
        <textarea
          type='text'
          name='postBody'
          placeholder="What's on your mind?"
        />
        <button type='submit'>✔Post</button>
      </form>
      <button onClick={viewAllPosts}>Back Home</button>
    </>
  )
}

NewPostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default NewPostForm
