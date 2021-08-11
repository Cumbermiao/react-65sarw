import React from "react";
import { Timeline, Group } from "saltui";

const btns = {
    label: '按钮',
    arr: [
      {
        label: '提交',
        type: 'button',
        value: '1',
        code: 'button',
        desc: {
          label: '说明',
          content: '用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程数据流转至后续节点。'
        }
      },
      {
        label: '通过',
        type: 'button',
        code: 'button',
        value: '4',
        desc: {
          label: '说明',
          content: '用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程数据流转至后续节点。'
        }
      },
      {
        label: '回退',
        type: 'button',
        buttonType: 'danger',
        code: 'button',
        value: '5',
        desc: {
          label: '说明',
          content: '开启后，用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，同时流程退回到指定的节点中。'
        }
      },
      {
        label: '关闭',
        type: 'button',
        buttonType: 'plain',
        code: 'button',
        value: '6',
        desc: {
          label: '说明',
          content: '开启后，用户在处理流程时点击此按钮，将取消用户在此节点中对数据的更改，页面返回上一节点。'
        }
      },
      {
        label: '暂存',
        type: 'button',
        code: 'button',
        value: '2',
        desc: {
          label: '说明',
          content: '用户在处理流程时点击此按钮，将保存用户在此节点中对数据的更改，流程不发生流转。暂存会将数据保存至数据库，触发字段「不允许重复值」校验。'
        }
      }
    ]
  }

function LogItem(props){
    const { nodeName, username, handleMethod } = props.data
    return (
        <div>
            <b>{nodeName}</b>
            <p>
                {username}
                {handleMethod}
            </p>
        </div>
    )
}

export default function OrderLog(props) {

    const logs = [
        { nodeName: '人事主管报备', username: '管理员', handleTime: '2021-08-03 14:15:08', handleMethod:'提交'},
        { nodeName: '主管审批', username: '管理员', handleTime: '2021-07-02 16:31:19', handleMethod:'通过'},
        { nodeName: '提交请假', username: '管理员', handleTime: '2021-07-02 16:31:06', handleMethod:'提交'},
    ]
  return (
    <div className="order-log">
      <Timeline>
        {
            logs.map((item,idx)=>(
                <Timeline.Item  desc={item.handleTime} active={idx===0} key={item.handleTime}>
                    <LogItem data={item} />
                </Timeline.Item>
            ))
        }
      </Timeline>
    </div>
  );
}
