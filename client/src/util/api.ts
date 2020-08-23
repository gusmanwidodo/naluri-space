import axios from 'axios'

const apiUrl = 'http://localhost:3000'
const baseUrl = (path: string) => `${apiUrl}${path}`
/**
 *
 * @param url
 * @param data
 */
export function apiGetService (path: string, data: any): Promise<any> {
  return axios.request({
    url: baseUrl(path),
    method: 'get',
    data
  })
}

/**
 *
 * @param url
 * @param data
 */
export function apiPostService (path: string, data: any): Promise<any> {
  return axios.request({
    url: baseUrl(path),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}
