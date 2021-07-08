import React, { Component } from 'react'
import { objectOf, shape } from 'prop-types'
import { connect } from 'react-redux'
import { IPost } from '../types/IPost'
import AllPosts from './AllPosts'
import { ADD_POST } from '../types/ActionTypes'
import { defaultPost } from '../reducers/post-reducer'
import NewPostForm from './NewPostForm'

const VIEWS = {
  ALL_POSTS: `ALL_POSTS`,
  NEW_POST_FORM: `NEW_POST_FORM`,
}

class PostControl extends Component {
  static propTypes = { postsById: objectOf(shape(IPost)) }

  constructor(props) {
    super(props)
    this.state = {
      currentView: VIEWS.ALL_POSTS,
    }
  }

  changeView = newView => this.setState({ currentView: newView })

  viewNewPostForm = () => this.changeView(VIEWS.NEW_POST_FORM)

  addPost = (newPost = defaultPost) => {
    const { dispatch } = this.props
    const action = {
      type: ADD_POST,
      content: newPost,
    }
    dispatch(action)
  }

  render() {
    switch (this.state.currentView) {
      case VIEWS.ALL_POSTS: return (
        <AllPosts
          postsById={this.props.postsById}
          viewPost={this.viewPost}
          viewNewPostForm={this.viewNewPostForm}
        />
      )
      case VIEWS.NEW_POST_FORM: return (
        <NewPostForm
          addPost={this.addPost}
        />
      )
      default:
        break
    }
  }
}

const mapStateToProps = state => ({
  postsById: state.postsById,
})

export default connect(mapStateToProps)(PostControl)

/* eslint-disable */
// if (skyIsBlue) {
//   goOutside()
//   if(itsWarmOut) {
//     washCar()
//   }
// }
// if (skyIsBlue && itsWarmOut) {
//   runWhatever()
//   runWhateverElse()
// }
// if (skyIsBlue) {
//   runWhatever()
// } else if (itsWarmOut) {
//   runWhateverElse()
// }