import React from 'react'
import { Layout } from 'antd';

import SideBar from './Sidebar'
import Topbar from "./Topbar";


const { Content } = Layout;



const Index = (props) => {
    
    

    return (
        <Layout className="gx-app-layout">
            <SideBar />
            <Layout>
                <Topbar />
                <Content
                    className="gx-layout-content"
                    style={{
                        padding:'24px',
                        margin: 0,
                        minHeight: 280,
                        height: '100%'
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default Index
