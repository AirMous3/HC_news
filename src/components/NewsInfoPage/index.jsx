import React, { useEffect, useLayoutEffect } from 'react'
import { Card } from 'antd'
import { CommentComponent } from '@/components/Comment'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentNews } from '@/store/currentNewsReducer/sagaActions'
import { getCurrentTime } from '@/helpers/getCurrentTime'
import { LOADING } from '@/constants/appStatus'
import { getComments } from '@/store/commentsReducer/sagaActions'
import { ONE_MINUTE } from '@/constants/intervalTime'
import { Preloader } from '@/components/Preloader'

export const NewsInfoPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const currentNews = useSelector(
    state => state.currentNews,
  )
  const currentComments = useSelector(
    state => state.comments,
  )
  const status = useSelector(state => state.app.status)

  const comments = currentNews.kids

  const { by, time, url, title } = currentNews

  const currentTime = getCurrentTime(time)

  useLayoutEffect(() => {
    dispatch(getCurrentNews(id))
  }, [id])

  useEffect(() => {
    let timeId
    if (comments) {
      timeId = setInterval(() => {
        dispatch(getComments(comments))
      }, ONE_MINUTE)
    }
    return () => clearInterval(timeId)
  })

  if (status === LOADING) return <Preloader />

  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={`${by} : ${currentTime}`}>
      <h2>{title}</h2>
      <a href={url}>{url}</a>
      <Card style={{ marginTop: 16 }} title="Comments">
        {currentComments
          ? currentComments.map(
              ({ by, id, text, time }) => (
                <Card key={id}>
                  <CommentComponent
                    time={time}
                    comment={text}
                    author={by}
                  />
                </Card>
              ),
            )
          : null}
      </Card>
    </Card>
  )
}
