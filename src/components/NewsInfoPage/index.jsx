import React, { useLayoutEffect } from 'react'
import { Card, Spin } from 'antd'
import { CommentComponent } from '@/components/Comment'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentNews } from '@/store/currentNewsReducer/sagaActions'
import { getCurrentTime } from '@/helpers/getCurrentTime'
import { LOADING } from '@/constants/appStatus'

export const NewsInfoPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const currentNews = useSelector(
    state => state.currentNews,
  )
  const comments = useSelector(state => state.comments)
  const status = useSelector(state => state.app.status)

  const { by, time, url, title } = currentNews

  const currentTime = getCurrentTime(time)

  useLayoutEffect(() => {
    dispatch(getCurrentNews(id))
  }, [id])

  if (status === LOADING) return <Spin size="large" style={{marginTop: '20px', marginLeft: '20px'}} />

  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={`${by} : ${currentTime}`}>
      <h2>{title}</h2>
      <a href={url}>{url}</a>
      <Card style={{ marginTop: 16 }} title="Comments">
        {comments
          ? comments.map(({ by, id, text, time }) => (
              <Card key={id}>
                <CommentComponent
                  time={time}
                  comment={text}
                  author={by}
                />
              </Card>
            ))
          : null}
      </Card>
    </Card>
  )
}
