import React, { useMemo } from 'react'
import { Card } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { getCurrentTime } from '@/helpers/getCurrentTime'

export const OneNews = React.memo(
  ({ author, time, title, likes }) => {
    const currentTime = useMemo(
      () => getCurrentTime(time),
      [time],
    )

    return (
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={`${author} : ${currentTime}`}>
        {title}
        <span style={{ marginLeft: '20px' }}>
          <LikeOutlined />
          <span style={{ marginLeft: '5px' }}>{likes}</span>
        </span>
      </Card>
    )
  },
)
