import axios from 'axios'

const apiurl = axios.create({
    baseURL: 'https://passbe.onrender.com',
    headers: {'content-type': 'application/json'}
})

export default apiurl;