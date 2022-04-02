import React, { useLayoutEffect } from 'react'
import { Card } from 'antd'
import { CommentComponent } from '@/components/Comment'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentNews } from '@/store/currentNewsReducer/sagaActions'
import { getCurrentTime } from '@/helpers/getCurrentTime'

export const NewsInfoPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const currentNews = useSelector(
    state => state.currentNews,
  )
  const { by, kids, time, url, title } = currentNews

  const currentTime = getCurrentTime(time)

  useLayoutEffect(() => {
    dispatch(getCurrentNews(id))
  }, [id])

  console.log(currentNews)
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={`${by} : ${currentTime}`}>
      <h2>{title}</h2>
      <a href={url}>{url}</a>
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
