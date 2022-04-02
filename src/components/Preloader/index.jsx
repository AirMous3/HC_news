import { Spin } from 'antd'
import React from 'react'

export const Preloader = () => {
  return (
    <Spin
      size="large"
      style={{ marginTop: '20px', marginLeft: '20px' }}
    />
  )
}
