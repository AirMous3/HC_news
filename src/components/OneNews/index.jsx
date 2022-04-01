import React, { useMemo } from 'react'
import { Card } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { getCurrentTime } from '@/helpers/getCurrentTime'
import { NavLink } from 'react-router-dom'

export const OneNews = React.memo(
  ({ author, time, title, likes, id }) => {
    const currentTime = useMemo(
      () => getCurrentTime(time),
      [time],
    )

    return (
      <NavLink to={`/${id}`}>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title={`${author} : ${currentTime}`}>
          {title}
          <span style={{ marginLeft: '20px' }}>
            <LikeOutlined />
            <span style={{ marginLeft: '5px' }}>
              {likes}
            </span>
          </span>
        </Card>
      </NavLink>
    )
  },
)
