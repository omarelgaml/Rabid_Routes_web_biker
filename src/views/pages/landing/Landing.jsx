import {
  FileOutlined,
  UserOutlined,
  FileAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import ContentArea from "../../components/ContentArea";
const { Content, Footer, Sider } = Layout;
import { StyledTitle } from "./styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../../state/thunks/UserThunks";
import { getCurrentUserThunk } from "../../../state/thunks/UserThunks";
import { UserSelector, UserLoadingSelector } from "../../../state/Selectors";
import Spinner from "../../components/Spinner";
const Landing = () => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(1);
  const user = useSelector((state) => UserSelector(state));
  const userLoading = useSelector((state) => UserLoadingSelector(state));

  useEffect(() => {
    if (!Object.keys(user).length) dispatch(getCurrentUserThunk());
  }, [dispatch, user]);
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "User",
      action: () => setCurrentTab(1),
    },
    {
      key: "2",
      icon: <FileAddOutlined />,
      label: "Pick a Parcel",
      action: () => setCurrentTab(2),
    },
    {
      key: "3",
      icon: <FileOutlined />,
      label: "View Parcels",
      action: () => setCurrentTab(3),
    },
    {
      key: "4",
      icon: <LogoutOutlined />,
      label: "Logout",
      action: () => dispatch(logoutThunk()),
    },
  ];

  return (
    <>
      {userLoading && <Spinner />}
      <Layout style={{ minHeight: "98vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0" theme="light">
          <StyledTitle level={4}>Rapid Routes</StyledTitle>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            {menuItems.map(({ key, icon, label, action }) => (
              <Menu.Item key={key} icon={icon} onClick={() => action()}>
                {label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <ContentArea selectedTab={currentTab} />
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Rapid routes ©2023 Created by Omar Elgaml
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default Landing;
