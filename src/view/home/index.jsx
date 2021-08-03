import React, { useState } from 'react';
import { SearchBar, Tab, ScrollList, InfiniteScroll } from 'saltui';
import './index.css';

function Card(props) {
  return <div />;
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
    title: '故障报修',
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
  return (
    <div class="home">
      <SearchBar />
      <Tab activeKey={'all'}>
        {tabList.map(item => (
          <Tab.Item title={item.label} key={item.value} />
        ))}
      </Tab>
      {list.length}
      {/* <ScrollList data={list} onLoad={onLoad} dataGetted={true}>
        {(data, idx) => {
          return (
            <ScrollList.Item key={idx}>
              <Card>
                <div>{data.title}</div>
              </Card>
            </ScrollList.Item>
          );
        }}
      </ScrollList> */}

      <InfiniteScroll loading={false} onLoad={onLoad}>
        <div class="overflow-auto h-500px">
          <div>
            {list.map(data => (
              <div class="p-8">
                <div>{data.title}</div>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
