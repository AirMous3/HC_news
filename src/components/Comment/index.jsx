import {Avatar, Comment, Tooltip} from 'antd'
import React from 'react'

export const CommentComponent = ({author, comment, time}) => {
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
        <Tooltip title={new Date().toLocaleDateString()}>
          <span>{new Date().toLocaleDateString()}</span>
        </Tooltip>
      }
    />
  )
}
