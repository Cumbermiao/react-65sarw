import axios from 'axios';

const request = axios.create({
    baseURL: '/',
    timeout: 60000
})

const successStatus = [200]
request.interceptors.response.use(
    response => {
        if (successStatus.indexOf(response.status) > -1) {
            return response.data
        } else {
            alert(response.data.message)
            return Promise.reject(response.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default request

export const CancelToken = axios.CancelToken


export const login = code => request({
    method: 'POST',
    url: `/login?authCode=${code}`
})

export const getOrderList = ({pageSize=10, pageNum= 1, keyword='', type=''})=>{
    return request({
        method: 'GET',
        url: '/h5/getOrderList',
        params: {
            keyword,
            pageSize,
            pageNum ,
            type
        }
    })
}
