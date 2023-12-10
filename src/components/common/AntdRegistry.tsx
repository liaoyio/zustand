import React from 'react'
import { ConfigProvider, type ThemeConfig } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const theme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: '#10b981',

  },
  components: {
    Button: {
      fontWeight: 300
    }
  }
}

const AntConfigProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      {children}
    </ConfigProvider>
  )
}
export default AntConfigProvider
