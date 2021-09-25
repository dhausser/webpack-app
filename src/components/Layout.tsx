import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const ARRAY_LENGTH = 15;
const INCREMENT = 1;

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Readonly<Props>): JSX.Element {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {new Array(ARRAY_LENGTH).fill(null).map((_, index) => {
            const key = index + INCREMENT;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="users">User</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default AppLayout;
