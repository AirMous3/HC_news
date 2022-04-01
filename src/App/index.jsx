import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout, {
  Content,
  Footer,
  Header,
} from 'antd/es/layout/layout'
import { NewsList } from '@/components/NewsList'
import { BackTop } from 'antd'
import { Redirect, Route, Switch } from 'react-router-dom'
import {NewsInfoPage} from '@/components/NewsInfoPage'

export const App = () => {
  const [state, setState] = useState([])
  const [news, setNews] = useState(
    JSON.parse(localStorage.getItem('news')),
  )

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const response = await axios.get(
  //       'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty',
  //     )
  //     setState(response.data.slice(0, 100))
  //   }
  //
  //   fetchMyAPI()
  // }, [])

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const news = []
  //     for (let i = 0; i < state.length; i++) {
  //       const response = await axios.get(
  //         `https://hacker-news.firebaseio.com/v0/item/${state[i]}.json?print=pretty`,
  //       )
  //       news.push(response.data)
  //     }
  //     setNews(news)
  //     localStorage.setItem('news', JSON.stringify(news))
  //   }
  //
  //   fetchMyAPI()
  // }, [state])

  console.log(news)
  return (
    <Layout>
      <Header
        style={{ color: 'white', textAlign: 'center', minHeight: '10vh' }}>
        Hacker News
      </Header>
      <Content style={{minHeight: '80vh'}}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <NewsList news={news} />}
          />
          <Route
            path="/404"
            render={() => <h1 style={{textAlign: 'center'}}>page not found</h1>}
          />
          <Route
            path="/newsInfo"
            render={() => <NewsInfoPage/>}
          />
          <Redirect from="*" to="/404" />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center', minHeight: '10vh'}}>
        Footer
      </Footer>
      <BackTop />
    </Layout>
  )
}
