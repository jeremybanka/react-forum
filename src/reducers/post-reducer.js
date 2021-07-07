import { nanoid } from 'nanoid'
import { ADD_POST, DELETE_POST } from '../types/ActionTypes'

const sampleId = nanoid()

const defaultState = {
  [sampleId]: {
    id: sampleId,
    user: `username`,
    title: `I made a post today`,
    // eslint-disable-next-line max-len
    postBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    timeStamp: new Date(),
    postScore: 0,
  },
}

const postReducer = (state = defaultState, action) => {
  const { content, type } = action
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        [nanoid()]: { ...content },
      }
    case DELETE_POST:
      const newState = { ...state }
      delete newState[content.id]
      return newState
    default:
      return state
  }
}

export default postReducer
