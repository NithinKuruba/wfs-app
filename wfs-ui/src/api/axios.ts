import axios from 'axios'
import { API_BASE_URL, AUDIT_API_URL } from 'utils/constants'
import { AddEntry } from './audit'

const headers = {
  Accept: 'application/json',
}

const wfs_api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers,
})

const audit_api = axios.create({
  baseURL: AUDIT_API_URL,
  timeout: 30000,
  headers,
})

wfs_api.interceptors.request.use(
  (request) => {
    if (request.baseURL?.includes(API_BASE_URL)) {
      let requestUrl = request.baseURL + request.url
      if (requestUrl.length > 65534) {
        requestUrl = requestUrl.substring(0, 65534)
      }
      AddEntry(requestUrl).catch((err) => {
        console.error(err)
      })
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { wfs_api, audit_api }
