import { string, number, instanceOf } from "prop-types"

export const IPost = {
  user: string.isRequired,
  title: string.isRequired,
  postBody: string.isRequired,
  timeStamp: instanceOf(Date),
  id: string.isRequired,
  postScore: number.isRequired,
}
