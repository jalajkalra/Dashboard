import React,{Fragment} from 'react'
import classes from '../../styles/common.module.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

const SubHeader = () => {
    return (
        <Fragment>
            <div className={classes.SubHeader}>
                <div>
                    <i className="fas fa-bell fa-2x"></i>
                </div>
                <div>
                    <p style={{fontWeight:'bold'}}>Jalaj Kalra</p>
                </div>
                <div>
                    <Dropdown overlay={menu}>
                        <span className="ant-dropdown-link"  onClick={e => e.preventDefault()}>
                            <i className="fas fa-user-circle fa-2x" style={{marginRight:'5px'}}></i> 
                            <DownOutlined/>
                        </span>
                    </Dropdown>
                </div>
            </div>
        </Fragment>
    )
}

export default SubHeader;
