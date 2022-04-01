import React from 'react'
import { Card } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

export const OneNews = ({ author, time, title, likes }) => {
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={`${author}: ${time}`}>
      {title}
      <span style={{ marginLeft: '20px' }}>
        <LikeOutlined />
        <span style={{ marginLeft: '5px' }}>{likes}</span>
      </span>
    </Card>
  )
}
