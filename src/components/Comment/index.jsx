import {Avatar, Comment, Tooltip} from 'antd'
import React from 'react'
import {getCurrentTime} from '@/helpers/getCurrentTime'

export const CommentComponent = ({author, comment, time}) => {
  const currentTime = getCurrentTime(time)
  return (
    <Comment
      author={<a>{author}</a>}
      avatar={
        <Avatar
          src="https://joeschmoe.io/api/v1/random"
          alt="Avatar"
        />
      }
      content={
        <p>
          {comment}
        </p>
      }
      datetime={
        <Tooltip title={currentTime}>
          <span>{currentTime}</span>
        </Tooltip>
      }
    />
  )
}
