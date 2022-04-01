import React from 'react'
import { Card } from 'antd'
import { CommentComponent } from '@/components/Comment'

export const NewsInfoPage = ({
  author,
  time,
  title,
  link,
}) => {
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={`${author} : ${time}`}>
      <h2>{title}</h2>
      <a href={link}>{link}</a>
      <Card style={{ marginTop: 16 }}>
        <Card>
          <CommentComponent />
        </Card>
        <Card>
          <CommentComponent />
        </Card>
        <Card>
          <CommentComponent />
        </Card>
      </Card>
    </Card>
  )
}
