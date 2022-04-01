import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout, {
  Content,
  Footer,
  Header,
} from 'antd/es/layout/layout'

export const App = () => {
  const [state, setState] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get(
        'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty',
      )
      setState(response.data.slice(0, 100))
    }

    fetchMyAPI()
  }, [])

  useEffect(() => {
    async function fetchMyAPI() {
      const news = []
      for (let i = 0; i < state.length; i++) {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${state[i]}.json?print=pretty`,
        )
        news.push(response.data)
      }
      setNews(news)
    }

    fetchMyAPI()
  }, [state])

  console.log(news)
  return (
    <div>
      <Layout>
        <Header
          style={{ color: 'white', textAlign: 'center' }}>
          Hacker News
        </Header>
        <Content>
          <ul>
            {news.map(({ by }) => (
              <li key={by}>name: {by}</li>
            ))}
          </ul>
        </Content>
        <Footer style={{textAlign: 'center'}}>Footer</Footer>
      </Layout>
    </div>
  )
}
