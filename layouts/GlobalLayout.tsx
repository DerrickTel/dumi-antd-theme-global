import { ConfigProvider } from 'antd';
import React from 'react';
import { useOutlet } from 'dumi';

const GlobalLayout: React.FC = () => {

  const outlet = useOutlet()

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      {outlet}
    </ConfigProvider>
  )
}

export default GlobalLayout;
