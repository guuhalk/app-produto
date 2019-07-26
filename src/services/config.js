import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://api-prd.herokuapp.com/api/'
})  