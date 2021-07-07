import React, { Component } from 'react'
import { objectOf, shape } from 'prop-types'
import { connect } from 'react-redux'
import { IPost } from '../types/IPost'
import AllPosts from './AllPosts'

const VIEWS = {
  ALL_POSTS: `ALL_POSTS`,
}

class PostControl extends Component {
  static propTypes = { postsById: objectOf(shape(IPost)) }

  constructor(props) {
    super(props)
    this.state = {
      currentView: VIEWS.ALL_POSTS,
    }
  }

  render() {
    switch (this.state.currentView) {
      case VIEWS.ALL_POSTS: return (
        <AllPosts
          postsById={this.props.postsById}
          viewPost={this.viewPost}
          viewPostForm={this.viewPostForm}
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