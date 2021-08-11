import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Home from './view/home';
import CreateOrder from './view/order/create';
import OrderDetail from './view/order/detail'
import RatePage from './view/order/rate'
import * as dd from 'dingtalk-jsapi'
import _config from './config/dingtalk'
import VConsole from 'vconsole'
import Cookies from 'js-cookie';
import { DING_TALK } from './utils/storage'
import { login as getLogin } from './api/base'

const vConsole = new VConsole()

const alert = function (msg) {
  dd.device.notification.alert({
    message: msg,
    title: "提示",//可传空
    buttonName: "确定",
    onSuccess: function () {
    },
    onFail: function (err) { }
  }).catch((err) => {
    window.alert(msg);
  });
}

const getCode = () => {
  return new Promise((resolve, reject) => {
    try {
      dd.ready(function () {
        dd.runtime.permission.requestAuthCode({
          corpId: _config.corpId, // 企业id
          onSuccess: function (info) {
            Cookies.set(DING_TALK.code, info.code)
            console.log('get code success', info)
            resolve(info.code)
          },
          onError: function (err) {
            console.warn('get code error', err)
          }
        });
      });
    } catch (err) {
      console.warn('error', err)
      reject(err)
    }
  })

}

const login = () => {
  getCode().then(code=>{
    return getLogin(code)
  }).then(res=>{
    console.log('login', res)
  }).catch(err=>{
    console.log('login err', err)
  })
  
}

const setTitle = (title = '我的事件') => {
  dd.biz.navigation.setTitle({
    title,//控制标题文本，空字符串表示显示默认文本
    onSuccess: function (result) { },
    onFail: function (err) { }
  }).catch(err => { console.log(err + '') });
}


export default function App() {

  useEffect(() => {
    setTitle()
  })

  return (
    <Router>
      <button onClick={getCode}>getCode</button>
      <button onClick={login}>login</button>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order/create">
          <CreateOrder />
        </Route>
        <Route path="/order/detail">
          <OrderDetail />
        </Route>
        <Route path="/order/rate:id">
          <RatePage />
        </Route>
      </Switch>
    </Router>
  );
}
