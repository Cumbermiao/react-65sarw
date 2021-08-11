import axios from '../api/base';
import _config from '../config/dingtalk';
import Cookies from 'js-cookie'

export const getAccessToken = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `http://oapi.dingtalk.com/gettoken?appkey=dingq7z4bzslox1otsx6&appsecret=Wzs6r95_McP-v_0aZaIU0eddkRVVFw27_QoGfJ5t-gt5wwXIokJBhF1CdBno-qfg`
        }).then(res => {
            console.log('res', res)
            resolve(res)
        }).catch(err => {
            console.log('err', err)
        })
    })
}

export const getUserInfoByCode = code => {
    return new Promise((resolve, reject)=>{
        axios({
            method: 'GET',
            url: 'https://oapi.dingtalk.com/user/getuserinfo',
            query: {
                access_token: '',
                code
            }
        }).then(res=>{
            console.log('res',res)
        }).catch(err => {
            console.log('err', err)
        })
    })
}