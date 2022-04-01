import { OneNews } from '@/components/OneNews'
import { Card } from 'antd'
import React from 'react'

export const NewsList = ({ news }) => {
  return (
    <Card title="New Stories">
      {news.map(({ by, id, time, title, score }) => (
        <OneNews
          key={id}
          title={title}
          time={time}
          author={by}
          likes={score}
          id={id}
        />
      ))}
    </Card>
  )
}
