import { OneNews } from '@/components/OneNews'
import { Card } from 'antd'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {getNews} from '@/store/newsReducer/sagaActions'
import {ONE_MINUTE} from '@/constants/intervalTime'

export const NewsList = () => {
  const dispatch = useDispatch()
  const [news, setNews] = useState(
    JSON.parse(localStorage.getItem('news')),
  )

  useLayoutEffect(() => {
    dispatch(getNews())
  }, [])

  useEffect(() => {
    const timeId = setInterval(() => {
      dispatch(getNews())
    }, ONE_MINUTE)

    return () => clearInterval(timeId)
  })

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
