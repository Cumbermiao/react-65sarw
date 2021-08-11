import React from 'react';
import { Tab } from 'saltui';
import OrderForm from './form'
import OrderLog from './log'
import './index.scss'



export default function OrderDetail(){
    return (
        <div>
            <Tab activeKey="1">
                <Tab.Item title='表单详情' key="1">
                    <OrderForm />
                </Tab.Item>
                <Tab.Item title='流转日志' key="2">
                    <OrderLog />
                </Tab.Item>
            </Tab>
        </div>
    )
}