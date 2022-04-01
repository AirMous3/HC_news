import React, {useLayoutEffect, useState} from 'react'
import { Card } from 'antd'
import { CommentComponent } from '@/components/Comment'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const NewsInfoPage = ({
  author,
  time,
  title,
  link,
}) => {
  // const [state, setState] = useState()
  // const { id } = useParams()
  // useLayoutEffect(() => {
  //   async function fetchMyAPI() {
  //     const result = await axios.get(
  //       `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
  //     )
  //     setState(result.data)
  //   }
  //
  //   fetchMyAPI()
  // }, [id])
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
