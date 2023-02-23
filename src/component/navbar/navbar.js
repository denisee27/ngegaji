import './navbar.css';
import '../sidebar/sidebar.css';
import SideBar from "../sidebar/sidebar";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Bell } from 'react-bootstrap-icons';
import { Avatar,Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

const Navbars = () => {
    return (
    <div>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"Navbars"} />
      <Navbar collapseOnSelect expand="lg" variant="dark" className='nav-bg'>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />           
          <Nav className='mx-3'>
            <a href="" ><Bell className='my-2 mx-3' color="#AAB5BB" size={25}  /></a>

            <Avatar className='my-auto border' size={45} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: "100%" }} />} />
            <Dropdown className='mx-2 my-auto' overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{color:'black'}}>
                Hello, Irvan!
                <DownOutlined/>
              </Space>
            </a>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        </div>
          
        
    )
}
export default Navbars;