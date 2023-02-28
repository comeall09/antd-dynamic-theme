import { useState } from 'react';
import { ConfigProvider } from 'antd';
import Button from 'antd/es/button';
import { ThemeConfig } from 'antd/lib/config-provider';

type ThemeType = 'light' | 'dark';

const darkTheme: ThemeConfig = {
  token: {},
  components: {},
};

const lightTheme: ThemeConfig = {
  token: {},
  components: {},
};

export function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  return (
    <div>
      <ConfigProvider
        theme={{
          token: currentTheme === 'light' ? lightTheme.token : darkTheme.token,
          components: currentTheme === 'light' ? lightTheme.components : darkTheme.components,
        }}
      >
        <Button>first</Button>
        <br />
        <br />
        <Button onClick={() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}>toggle theme</Button>
      </ConfigProvider>
    </div>
  );
}