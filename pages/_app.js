import '../styles/globals.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link'


const { Header, Content, Footer } = Layout;


function MyApp({ Component, pageProps }) {
  return(
      <Layout className="layout">
          <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

                  <Menu.Item key="1">
                      <Link href={`/`}>
                          <a>
                              HOME
                          </a>
                      </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                      <Link href={`/posts/`}>
                          <a>
                              POST
                          </a>
                      </Link>
                  </Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
          </Header>
          <Content style={{ padding: '0 5px' }}>
              <div className="site-layout-content">
                  <Component {...pageProps} />
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  )
}

export default MyApp
