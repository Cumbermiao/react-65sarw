import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchBar, Tab, ScrollList, InfiniteScroll } from "saltui";
import IconRight from "salt-icon/lib/DirectionRight";
import { getOrderList } from "../../api/base";
import "./index.scss";

function Card(props) {
  const history = useHistory();
  const { data } = props;

  const toDetail = () => {
    history.push(`/order/detail?id=${data.id}`);
  };
  return (
    <div className="list-item" onClick={toDetail}>
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
  const [list, setList] = useState([order]);
  const [pageNum, setPageNum] = useState(1);
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const tabList = [
    { label: "全部", value: "" },
    { label: "今天", value: "1" },
    { label: "昨天", value: "2" },
    { label: "近7天", value: "3" },
  ];

  const order = {
    code: "IN20210011",
    createPersonName: "系统管理员",
    createTime: "2021-06-11 10:59:01",
    id: 1756,
    state: "5",
    title: "故障报修故障报修故障报修故障报修故障报修故障报修故障报修",
    systemName: "OA系统",
  };

  const getList = () => {
    getOrderList({ pageNum, type, keyword })
      .then(({ data }) => {
        list.concat(data);
        setList(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onLoad = () => {
    pageNum++;
    setPageNum(pageNum);
    getList();
  };

  const onSearch = (keyword) => {
    console.log("onSearch", keyword);
    setKeyword(keyword);
    getList();
  };

  const onChange = (params) => {
    console.log("onChange", params);
  };

  const onEnter = (params) => {
    console.log("onEnter", params);
  };

  const onExit = (params) => {
    console.log("onExit", params);
    setKeyword("");
    getList();
  };

  return (
    //TODO: instantSearch=false 仍然触发 onSearch
    <div className="page-home">
      <SearchBar
        className="searchbar"
        placeholder="事件搜索"
        instantSearch={false}
        {...{ onSearch, onChange, onEnter, onExit }}
        style={{ borderBottom: "none" }}
      />
      <Tab className="home-tab" activeKey={tab}>
        {tabList.map((item) => (
          <Tab.Item title={item.label} key={item.value} />
        ))}
      </Tab>

      <InfiniteScroll loading={false} onLoad={onLoad}>
        <div class="list-container">
          <div>
            {list.map((data, idx) => (
              <Card key={idx} data={data} />
            ))}
          </div>
        </div>
      </InfiniteScroll>

      <div className="add-btn" onClick={() => history.push("/order/create")}>
        <i className="plus icon" />
      </div>
    </div>
  );
}
