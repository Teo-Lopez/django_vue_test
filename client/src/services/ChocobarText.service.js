import axios from 'axios'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.xsrfCookieName = 'csrftoken'

class ChocobarService {
  constructor () {
    this.service = axios.create({
      timeout: 10000,
      withCredentials: true,
      baseURL: 'https://chocobar-test.herokuapp.com/api'
      // baseURL: "https://stark-bastion-02104.herokuapp.com/"
    })
  }

  sendText () {
    return this.service
      .post('/chocobar/', {front: 'test1', back: 'test1'})
      .then(res => res)
      .catch(err => err)
  }
}

export default ChocobarService
