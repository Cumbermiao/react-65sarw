import React, { useState } from 'react';
import { SearchBar, Tab, ScrollList, InfiniteScroll } from 'saltui';
import IconRight from 'salt-icon/lib/DirectionRight';
import './index.scss';

function Card(props) {
  const { data } = props;
  return (
    <div className="list-item">
      <div className="item-header">
        <big>{data.title}</big>
        <i>{data.code}</i>
      </div>
      <div className="item-body">
        <div className="content">
          <p>业务系统：{data.createPersonName}</p>
          <p>创建时间：{data.createTime}</p>
        </div>
        <IconRight fill="#ababab" width="0.34rem" height="0.34rem" />
      </div>
    </div>
  );
}

export default function Home(props) {
  const tabList = [
    { label: '全部', value: 'all' },
    { label: '今天', value: '1' },
    { label: '昨天', value: '2' },
    { label: '近7天', value: '3' }
  ];

  const order = {
    autoFlag: 0,
    code: 'IN20210011',
    createPersonId: 1,
    createPersonName: '系统管理员',
    createTime: '2021-06-11 10:59:01',
    designateId: 30,
    designateName: '',
    estimateId: null,
    estimateName: null,
    finishTime: '2021-06-11 11:16:49',
    handlePersonName: '系统管理员',
    haveRemoved: '0',
    id: 1756,
    reviewId: null,
    reviewName: null,
    state: '5',
    title: '故障报修故障报修故障报修故障报修故障报修故障报修故障报修',
    todoPersonId: '',
    type: 1
  };
  const [list, setList] = useState([order]);

  const onLoad = () => {
    console.log('onload');
    list.push({
      autoFlag: 0,
      code: 'IN20210011',
      createPersonId: 1,
      createPersonName: '系统管理员',
      createTime: '2021-06-11 10:59:01',
      designateId: 30,
      designateName: '',
      estimateId: null,
      estimateName: null,
      finishTime: '2021-06-11 11:16:49',
      handlePersonName: '系统管理员',
      haveRemoved: '0',
      id: 1756,
      reviewId: null,
      reviewName: null,
      state: '5',
      title: '故障报修',
      todoPersonId: '',
      type: 1
    });
    setList(list.slice(0));
  };

  const onSearch = params => {
    console.log('onSearch', params);
  };

  const onChange = params => {
    console.log('onChange', params);
  };

  const onEnter = params => {
    console.log('onEnter', params);
  };

  const onExit = params => {
    console.log('onExit', params);
  };

  return (
    <div className="page-home">
      <SearchBar
        placeholder="事件搜索"
        {...{ onSearch, onChange, onEnter, onExit, searchDelay: 500 }}
      />
      <Tab activeKey={'all'}>
        {tabList.map(item => (
          <Tab.Item title={item.label} key={item.value} />
        ))}
      </Tab>

      <InfiniteScroll loading={false} onLoad={onLoad}>
        <div class="list-container">
          <div>
            {list.map(data => (
              <Card data={data} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
