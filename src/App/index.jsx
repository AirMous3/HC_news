import React from 'react'
import Layout, {
  Content,
  Footer,
  Header,
} from 'antd/es/layout/layout'
import { NewsList } from '@/components/NewsList'
import { BackTop } from 'antd'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NewsInfoPage } from '@/components/NewsInfoPage'

export const App = () => {
  return (
    <Layout>
      <Header
        style={{
          color: 'white',
          textAlign: 'center',
          minHeight: '10vh',
        }}>
        Hacker News
      </Header>
      <Content style={{ minHeight: '80vh' }}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <NewsList />}
          />
          <Route
            path="/:id"
            render={() => <NewsInfoPage />}
          />
          <Route
            path="/404"
            render={() => (
              <h1 style={{ textAlign: 'center' }}>
                page not found
              </h1>
            )}
          />

          <Redirect from="*" to="/404" />
        </Switch>
      </Content>
      <Footer
        style={{ textAlign: 'center', minHeight: '10vh' }}>
        Footer
      </Footer>
      <BackTop />
    </Layout>
  )
}
