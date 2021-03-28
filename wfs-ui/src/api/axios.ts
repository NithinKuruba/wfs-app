import axios from 'axios'
import { API_BASE_URL } from 'utils/constants'

const headers = {
  Accept: 'application/json',
}

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers,
})

export default instance
