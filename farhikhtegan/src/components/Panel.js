import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import logo from '../images/logo.png';
import Farhikhtegan from './Farhikhtegan';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('پروفایل', '1', <PieChartOutlined />),
  getItem('فرهیختگان', '2', <DesktopOutlined />),
  getItem('رویدادها', '3', <UserOutlined />), // [ getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]
  getItem('پروژه‌ها و موقعیت‌ها', '4', <TeamOutlined />),
  getItem('پرسشنامه‌ها', '5', <FileOutlined />),
];

const logoStyle = {
    color: 'white',
    marginRight: '15px'
}

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
      style={{
        minHeight: '100vh',
        direction: 'rtl'
      }}
    >
      <Sider style={{paddingTop: '18px',}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <h1 style={logoStyle} ><img width={50} size="large" src={logo} /></h1>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>منوها</Breadcrumb.Item>
            <Breadcrumb.Item>فرهیختگان</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
           <Farhikhtegan />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Farhikhtegan ©2022 Created Atomic Energy High School
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;